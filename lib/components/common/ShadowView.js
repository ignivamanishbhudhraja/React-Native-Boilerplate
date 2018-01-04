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
var _jsxFileName = "src/components/common/ShadowView.js";
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _constants = require("../../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var ShadowView = function ShadowView(props) {
  return _react2.default.createElement(
    View,
    {
      style: [styles.container, props.containerStyle],
      __source: { fileName: _jsxFileName, lineNumber: 14 }
    },
    props.children
  );
};
ShadowView.defaultProps = { containerStyle: {} };
var styles = _reactNative.StyleSheet.create({
  container: _extends(
    {
      flex: 1,
      width: _constants2.default.BaseStyle.DEVICE_WIDTH,
      height: _constants2.default.BaseStyle.DEVICE_HEIGHT
    },
    _constants2.default.BaseStyle.SHADOW_STYLE
  )
});
exports.default = ShadowView;
