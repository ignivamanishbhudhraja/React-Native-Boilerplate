"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telephone = telephone;
exports.webpage = webpage;
var _reactNative = require("react-native");
function telephone(phoneNumber) {
  _reactNative.Linking.canOpenURL("tel:" + phoneNumber)
    .then(function(supported) {
      if (!supported) {
        console.log("Can't handle => " + phoneNumber);
      } else {
        return _reactNative.Linking.openURL("tel:" + phoneNumber);
      }
    })
    .catch(function(err) {
      return console.error("An error occurred", err);
    });
}
function webpage(url) {
  console.log("here is the URL ******** ", url);
  _reactNative.Linking.canOpenURL(url)
    .then(function(supported) {
      if (!supported) {
        console.log("Can't handle url: " + url);
      } else {
        return _reactNative.Linking.openURL(url);
      }
    })
    .catch(function(err) {
      return console.error("An error occurred", err);
    });
}
