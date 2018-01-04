"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var _jsxFileName = "src/components/common/Button.js";
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
var _constants = require("../../constants");
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
var Button = (function(_Component) {
  _inherits(Button, _Component);
  function Button() {
    _classCallCheck(this, Button);
    return _possibleConstructorReturn(
      this,
      (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments)
    );
  }
  _createClass(Button, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          buttonStyle = _props.buttonStyle,
          image = _props.image,
          imageStyle = _props.imageStyle,
          text = _props.text,
          textStyle = _props.textStyle,
          image2 = _props.image2,
          imageStyle2 = _props.imageStyle2;
        return _react2.default.createElement(
          _reactNative.TouchableOpacity,
          {
            activeOpacity: 0.9,
            style: [styles.buttonStyle, buttonStyle],
            disabled:
              this.props.disabled !== undefined && this.props.disabled == true
                ? true
                : false,
            onPress: this.props.onPress,
            __source: { fileName: _jsxFileName, lineNumber: 25 }
          },
          image &&
            _react2.default.createElement(_reactNative.Image, {
              source: image,
              style: [styles.imageStyle, imageStyle],
              __source: { fileName: _jsxFileName, lineNumber: 33 }
            }),
          _react2.default.createElement(
            _reactNative.Text,
            {
              style: [styles.text, textStyle],
              __source: { fileName: _jsxFileName, lineNumber: 38 }
            },
            text
          ),
          image2 &&
            _react2.default.createElement(_reactNative.Image, {
              source: image2,
              style: [styles.imageStyle2, imageStyle2],
              __source: { fileName: _jsxFileName, lineNumber: 43 }
            })
        );
      }
    }
  ]);
  return Button;
})(_react.Component);
exports.default = Button;
var styles = _reactNative.StyleSheet.create({
  buttonStyle: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT * 7 / 100,
    backgroundColor: _constants2.default.Colors.AccentColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  imageStyle: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    width: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    marginRight: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 2
  },
  text: _extends({}, _constants2.default.Fonts.content_bold, {
    color: _constants2.default.Colors.White
  }),
  imageStyle2: {
    height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    width: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    marginLeft: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 2
  }
});
