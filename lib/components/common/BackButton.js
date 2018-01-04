"use strict";
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
var _jsxFileName = "src/components/common/BackButton.js";
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var BackButton = function BackButton(props) {
  var label = props.label,
    onPress = props.onPress,
    title = props.title,
    containerStyle = props.containerStyle,
    buttonStyle = props.buttonStyle,
    textStyle = props.textStyle,
    imageStyle = props.imageStyle;
  return _react2.default.createElement(
    _reactNative.View,
    {
      style: [styles.container, containerStyle],
      __source: { fileName: _jsxFileName, lineNumber: 23 }
    },
    _react2.default.createElement(
      _reactNative.TouchableHighlight,
      {
        hitSlop: _constants2.default.BaseStyle.HIT_SLOP,
        underlayColor: _constants2.default.Colors.Transparent,
        style: [styles.button, buttonStyle],
        onPress: onPress,
        __source: { fileName: _jsxFileName, lineNumber: 24 }
      },
      title
        ? _react2.default.createElement(
            _reactNative.Text,
            {
              style: [styles.textStyle, textStyle],
              __source: { fileName: _jsxFileName, lineNumber: 31 }
            },
            title
          )
        : _react2.default.createElement(_reactNative.Image, {
            source: _constants2.default.Images.ic_nav_white_back,
            style: [styles.backImage, imageStyle],
            __source: { fileName: _jsxFileName, lineNumber: 33 }
          })
    )
  );
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: _constants2.default.Colors.PrimaryColor
  },
  button: {
    backgroundColor: _constants2.default.Colors.Transparent,
    width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 12,
    marginLeft: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 2,
    marginTop:
      _constants2.default.BaseStyle.DEVICE_HEIGHT === 812
        ? _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 4.2
        : _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 2.5
  },
  backImage: {
    height: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 4.5,
    width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 7,
    alignSelf: "center"
  },
  textStyle: _extends(
    {
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: _constants2.default.Colors.Transparent,
      color: _constants2.default.Colors.White
    },
    _constants2.default.Fonts.contentBold
  )
});
BackButton.defaultProps = { title: "" };
module.exports = BackButton;
