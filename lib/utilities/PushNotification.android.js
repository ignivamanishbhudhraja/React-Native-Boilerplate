"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushNotificationInit = pushNotificationInit;
exports.onNotificationRedirection = onNotificationRedirection;
exports.pushNotificationRemove = pushNotificationRemove;
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactNativeFcm = require("react-native-fcm");
var _reactNativeFcm2 = _interopRequireDefault(_reactNativeFcm);
var _mongoidJs = require("mongoid-js");
var _lodash = require("lodash");
var _lodash2 = _interopRequireDefault(_lodash);
var _Idx = require("./Idx");
var _Idx2 = _interopRequireDefault(_Idx);
var _moment = require("moment");
var _moment2 = _interopRequireDefault(_moment);
var _user = require("../redux/modules/user");
var userActions = _interopRequireWildcard(_user);
var _bookings = require("../redux/modules/bookings");
var bookingActions = _interopRequireWildcard(_bookings);
var _nav = require("../redux/modules/nav");
var _constants = require("../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var notificationListener = void 0,
  refreshTokenListener = void 0;
var appState = _reactNative.AppState.currentState;
function pushNotificationInit(store, notificationRef) {
  var _this = this;
  _reactNative.AppState.addEventListener("change", function(nextAppState) {
    appState = nextAppState;
  });
  _reactNativeFcm2.default.requestPermissions();
  _reactNativeFcm2.default.getFCMToken().then(function(token) {
    console.log("DeviceToken=> ", token);
    if (token) {
      store.dispatch(userActions.setDeviceToken(token));
    }
  });
  _reactNativeFcm2.default.getInitialNotification().then(function(res) {
    var context = _this;
    console.log("getInitialNotification==> ", res);
    if (
      (0, _Idx2.default)(res, function(_) {
        return _.fcm.action;
      })
    ) {
      setTimeout(function() {
        onNotificationRedirection(res, store);
      }, 500);
    }
  });
  notificationListener = _reactNativeFcm2.default.on(
    _reactNativeFcm.FCMEvent.Notification,
    function _callee(res) {
      var context;
      return regeneratorRuntime.async(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                console.log("notificationListener==> ", res);
                context = _this;
                if (appState === "active") {
                  notificationRef.show({
                    title: res.fcm.title,
                    message: res.fcm.body,
                    onPress: function onPress() {
                      return onNotificationRedirection(res, store);
                    },
                    icon: _constants2.default.Images.ic_mobiyle_valet_small,
                    vibrate: true
                  });
                }
                if (
                  res.notificationType === "2" ||
                  res.notificationType === "5" ||
                  res.opened_from_tray
                ) {
                  setTimeout(function() {
                    onNotificationRedirection(res, store);
                  }, 500);
                }
              case 4:
              case "end":
                return _context.stop();
            }
          }
        },
        null,
        _this
      );
    }
  );
  refreshTokenListener = _reactNativeFcm2.default.on(
    _reactNativeFcm.FCMEvent.RefreshToken,
    function(token) {
      if (token) {
        console.log("refresh", token);
        store.dispatch(userActions.setDeviceToken(token));
      }
    }
  );
}
function onNotificationRedirection(res, store) {
  if (
    (0, _Idx2.default)(store.getState().user, function(_) {
      return _.userDetails.auth.token;
    })
  ) {
    var userRole = store.getState().user.userDetails.role;
    var dashboard = "",
      notification = "ProviderNotifications";
    switch (userRole) {
      case "Consumer":
        dashboard = "Dashboard";
        notification = "CustomerNotifications";
        break;
      default:
        dashboard = "ServiceDashboard";
        notification = "ProviderNotifications";
        break;
    }
    switch (parseInt(res.notificationType)) {
      case 1:
        if (
          store.getState().bookings.isSoS == true ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "ActiveService" ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "Invoice" ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === notification
        ) {
          break;
        } else {
          store.dispatch((0, _nav.goTo)({ route: notification }));
          break;
        }
        break;
      case 2:
        if (userRole === "Consumer") {
          break;
        }
        if (
          store.getState().bookings.isSoS == true ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "ActiveService" ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "Invoice"
        ) {
          break;
        } else {
          store.dispatch(
            bookingActions.setActiveBooking(JSON.parse(res.bookingDetails))
          );
          store.dispatch(
            (0, _nav.resetToDashboard)({ route: "ActiveService" })
          );
          break;
        }
        break;
      case 5:
        if (userRole === "Consumer") {
          break;
        } else if (
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "ActiveService"
        ) {
          store.dispatch(bookingActions.setActiveBooking(null));
          store.dispatch(bookingActions.setSoSInBooking(false));
          store.dispatch((0, _nav.resetToDashboard)({ route: dashboard }));
          break;
        }
      default:
        if (
          store.getState().bookings.isSoS == true ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "ActiveService" ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === "Invoice" ||
          store.getState().nav.routes[store.getState().nav.routes.length - 1]
            .routeName === dashboard
        ) {
          break;
        } else {
          if (userRole === "Consumer") {
            store.dispatch((0, _nav.goTo)({ route: notification }));
            break;
          } else {
            store.dispatch((0, _nav.resetToDashboard)({ route: dashboard }));
            break;
          }
        }
        break;
    }
  }
  if (_lodash2.default.isFunction(res.finish)) {
    res.finish();
  }
}
function pushNotificationRemove(store) {
  notificationListener.remove();
  refreshTokenListener.remove();
  _reactNative.AppState.removeEventListener("change", function(nextAppState) {
    appState = nextAppState;
  });
}
