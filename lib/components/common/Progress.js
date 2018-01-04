"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactRedux = require("react-redux");
var _reactNativeLoadingSpinnerOverlay = require("react-native-loading-spinner-overlay");
var _reactNativeLoadingSpinnerOverlay2 = _interopRequireDefault(
  _reactNativeLoadingSpinnerOverlay
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var mapStateToProps = function mapStateToProps(state) {
  return { visible: state.app.isLoading };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(
  _reactNativeLoadingSpinnerOverlay2.default
);
