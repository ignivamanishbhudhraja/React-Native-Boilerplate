"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaPermissions = mediaPermissions;
var _react = require("react");
var _react2 = _interopRequireDefault(_react);
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _reactNativePermissions2 = _interopRequireDefault(_reactNativePermissions);
var _constants = require("../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function mediaPermissions(type, callBack) {
  _reactNativePermissions2.default
    .checkMultiplePermissions(["camera", "photo"])
    .then(function(response) {
      if (response) {
        context.launchCameraGallery();
      } else if (response === "denied") {
        _reactNative.Alert.alert(
          "Permissions Request",
          "Please go to Settings > Applications > Mobiyle > Permissions > Camera and Storage to allow Mobiyle to access your Camera & Gallery.",
          [
            {
              text: "Settings",
              onPress: function onPress() {
                return _reactNativePermissions2.default.openSettings();
              }
            },
            { text: "cancel" }
          ],
          { cancelable: false }
        );
      } else {
        _reactNativePermissions2.default
          .requestPermission(type)
          .then(function(response) {
            if (response === "authorized") {
            } else {
              _reactNative.Alert.alert(
                "Permissions Request",
                "Please go to Settings > Applications > Mobiyle > Permissions > Camera and Storage to allow Mobiyle to access your Camera & Gallery.",
                [
                  {
                    text: "Settings",
                    onPress: function onPress() {
                      return _reactNativePermissions2.default.openSettings();
                    }
                  },
                  { text: "cancel" }
                ],
                { cancelable: false }
              );
            }
          });
      }
    });
}
