"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchLocation = exports.setAddress = exports.selectedLocation = exports.gpsLocation = undefined;
var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
exports.default = reducer;
var _app = require("./app");
var _RestClient = require("../../utilities/RestClient");
var _RestClient2 = _interopRequireDefault(_RestClient);
var _reactNativeReduxToast = require("react-native-redux-toast");
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
var _Actions = require("../Actions");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var gpsLocation = (exports.gpsLocation = function gpsLocation(data) {
  return { type: _Actions.GPS_LOCATION, data: data };
});
var selectedLocation = (exports.selectedLocation = function selectedLocation(
  data
) {
  return { type: _Actions.SELECTED_LOCATION, data: data };
});
var setAddress = (exports.setAddress = function setAddress(data) {
  return { type: _Actions.SET_ADDRESS, data: data };
});
var fetchLocation = (exports.fetchLocation = function fetchLocation(
  postalCode
) {
  return function(dispatch) {
    dispatch((0, _app.handleLoader)());
    _RestClient2.default
      .fetchAddressWithPostalCode(postalCode)
      .then(function(response) {
        if (response.code === 2000 && response.message == "Success") {
          dispatch(setAddress(response.result));
        }
        dispatch((0, _app.handleLoader)());
      })
      .catch(function(error) {
        dispatch((0, _app.handleLoader)());
      });
  };
});
var initialState = { gpsLocation: null, selectedLocation: null, addresses: [] };
function reducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];
  switch (action.type) {
    case _Actions.GPS_LOCATION:
      return _extends({}, state, {
        gpsLocation: _extends({}, state.gpsLocation, action.data)
      });
    case _Actions.SELECTED_LOCATION:
      return _extends({}, state, {
        selectedLocation: _extends({}, state.selectedLocation, action.data)
      });
    case _Actions.SET_ADDRESS:
      return _extends({}, state, { addresses: action.data });
    default:
      return state;
  }
}
