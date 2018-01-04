Object.defineProperty(exports, "__esModule", { value: true });
var _jsxFileName = "src/index.js";
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactRedux = require("react-redux");
var _configureStore2 = require("./config/configureStore");
var _configureStore3 = _interopRequireDefault(_configureStore2);
var _Locations = require("./utilities/Locations");
var _reactApollo = require("react-apollo");
var _apolloClientConfig = require("./config/apolloClientConfig");
var _apolloClientConfig2 = _interopRequireDefault(_apolloClientConfig);
var _PushNotification = require("./utilities/PushNotification");
var _Root = require("./Root");
var _Root2 = _interopRequireDefault(_Root);
var _reactNativeInAppNotification = require("react-native-in-app-notification");
var _reactNativeInAppNotification2 = _interopRequireDefault(
  _reactNativeInAppNotification
);
var _constants = require("./constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}
var foo = function foo(x) {
  return x;
};
foo(1);
var _configureStore = (0, _configureStore3.default)(),
  store = _configureStore.store,
  persistor = _configureStore.persistor;
var client = (0, _apolloClientConfig.getGraphQlClient)();
if (!client) {
  client = (0, _apolloClientConfig2.default)(store);
}
var Application = (function(_Component) {
  _inherits(Application, _Component);
  function Application(props) {
    _classCallCheck(this, Application);
    var _this = _possibleConstructorReturn(
      this,
      (Application.__proto__ || Object.getPrototypeOf(Application)).call(
        this,
        props
      )
    );
    _this.initilizePushNotification = function() {
      var context = _this;
      if (_reactNative.Platform.OS === "ios") {
        (0, _PushNotification.pushNotificationInit)(store);
      } else {
        (0, _PushNotification.pushNotificationInit)(store, _this.notification);
      }
    };
    _this.handleNetwork = function() {
      var context = _this;
      function handleFirstConnectivityChange(isConnected) {
        _reactNative.NetInfo.isConnected.removeEventListener(
          "change",
          handleFirstConnectivityChange
        );
      }
      _reactNative.NetInfo.isConnected.addEventListener(
        "change",
        handleFirstConnectivityChange
      );
      _reactNative.NetInfo.isConnected.fetch().then(function(isConnected) {});
    };
    (0, _Locations.checkPermissions)(store);
    _this.notification = null;
    return _this;
  }
  _createClass(Application, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.handleNetwork();
        this.initilizePushNotification();
      }
    },
    { key: "componentWillUnmount", value: function componentWillUnmount() {} },
    {
      key: "render",
      value: function render() {
        var _this2 = this;
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: { flex: 1 },
            __source: { fileName: _jsxFileName, lineNumber: 92 }
          },
          _react2.default.createElement(
            _reactApollo.ApolloProvider,
            {
              client: client,
              __source: { fileName: _jsxFileName, lineNumber: 93 }
            },
            _react2.default.createElement(
              _reactRedux.Provider,
              {
                store: store,
                __source: { fileName: _jsxFileName, lineNumber: 94 }
              },
              _react2.default.createElement(_Root2.default, {
                __source: { fileName: _jsxFileName, lineNumber: 95 }
              })
            )
          ),
          _reactNative.Platform.OS !== "android" &&
            _react2.default.createElement(
              _reactNativeInAppNotification2.default,
              {
                backgroundColour: _constants2.default.Colors.White,
                ref: function ref(_ref) {
                  _this2.notification = _ref;
                },
                __source: { fileName: _jsxFileName, lineNumber: 100 }
              }
            )
        );
      }
    }
  ]);
  return Application;
})(_react.Component);
exports.default = Application;
