Object.defineProperty(exports, "__esModule", { value: true });
var _jsxFileName = "src/containers/index.js";
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
var NextFoodie = (function(_React$Component) {
  _inherits(NextFoodie, _React$Component);
  function NextFoodie() {
    _classCallCheck(this, NextFoodie);
    return _possibleConstructorReturn(
      this,
      (NextFoodie.__proto__ || Object.getPrototypeOf(NextFoodie)).apply(
        this,
        arguments
      )
    );
  }
  _createClass(NextFoodie, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          _reactNative.View,
          {
            style: styles.container,
            __source: { fileName: _jsxFileName, lineNumber: 18 }
          },
          _react2.default.createElement(
            _reactNative.Text,
            {
              style: styles.welcome,
              __source: { fileName: _jsxFileName, lineNumber: 19 }
            },
            "Welcome to React Native!"
          ),
          _react2.default.createElement(
            _reactNative.Text,
            {
              style: styles.instructions,
              __source: { fileName: _jsxFileName, lineNumber: 22 }
            },
            "To get started, edit index.android.js"
          ),
          _react2.default.createElement(
            _reactNative.Text,
            {
              style: styles.instructions,
              __source: { fileName: _jsxFileName, lineNumber: 25 }
            },
            "Double tap R on your keyboard to reload,",
            "\n",
            "Shake or press menu button for dev menu"
          )
        );
      }
    }
  ]);
  return NextFoodie;
})(_react2.default.Component);
exports.default = NextFoodie;
var styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: { fontSize: 20, textAlign: "center", margin: 10 },
  instructions: { textAlign: "center", color: "#333333", marginBottom: 5 }
});
