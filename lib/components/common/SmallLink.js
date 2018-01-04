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
var _jsxFileName = "src/components/common/SmallLink.js";
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Screen = require("Dimensions").get("window");
var SmallLink = function SmallLink(props) {
  var text = props.text,
    onPress = props.onPress,
    textStyle = props.textStyle,
    linkStyle = props.linkStyle;
  return _react2.default.createElement(
    _reactNative.TouchableOpacity,
    {
      style: [styles.linkStyle, linkStyle],
      onPress: onPress,
      __source: { fileName: _jsxFileName, lineNumber: 16 }
    },
    _react2.default.createElement(
      _reactNative.Text,
      {
        style: [styles.textStyle, textStyle],
        __source: { fileName: _jsxFileName, lineNumber: 17 }
      },
      text
    )
  );
};
var styles = _reactNative.StyleSheet.create({
  textStyle: _extends(
    { color: _constants2.default.Colors.AccentColor },
    _constants2.default.Fonts.tiny
  ),
  linkStyle: {}
});
SmallLink.PropTypes = {
  text: _react.PropTypes.string.isRequired,
  onPress: _react.PropTypes.func,
  style: _react.PropTypes.object.isRequired
};
exports.default = SmallLink;
