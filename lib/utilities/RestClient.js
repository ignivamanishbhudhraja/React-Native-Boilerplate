"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var _connection = require("../config/connection");
var _connection2 = _interopRequireDefault(_connection);
var _querystring = require("querystring");
var _querystring2 = _interopRequireDefault(_querystring);
var _reactNative = require("react-native");
var _constants = require("../constants");
var _constants2 = _interopRequireDefault(_constants);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var logintoken = "";
var RestClient = (function() {
  function RestClient() {
    _classCallCheck(this, RestClient);
  }
  _createClass(RestClient, null, [
    {
      key: "isConnected",
      value: function isConnected() {
        var context = this;
        return new Promise(function(fulfill, reject) {
          _reactNative.NetInfo.isConnected.fetch().then(function(isConnected) {
            if (isConnected) fulfill(isConnected);
            else {
              reject(isConnected);
            }
          });
        });
      }
    },
    {
      key: "getVehicle",
      value: function getVehicle(params) {
        var context = this;
        return new Promise(function(fulfill, reject) {
          context
            .isConnected()
            .then(function() {
              var query = _querystring2.default.stringify(params);
              console.log(
                "get vehicle request => ",
                _connection2.default.getVehicleEndPoint() + "?" + query
              );
              fetch(_connection2.default.getVehicleEndPoint() + "?" + query, {
                method: "GET",
                timeout: 1000 * 1 * 60,
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              })
                .then(function(response) {
                  return response.text();
                })
                .then(function(responseText) {
                  console.log("responseText*****", responseText);
                  fulfill(JSON.parse(responseText));
                })
                .catch(function(error) {
                  console.warn(error);
                  fulfill({
                    message:
                      "Please check your internet connectivity or our server is not responding."
                  });
                });
            })
            .catch(function(error) {
              fulfill({
                message:
                  "Please check your internet connectivity or our server is not responding."
              });
            });
        });
      }
    },
    {
      key: "imageUpload",
      value: function imageUpload(url, params) {
        var token =
          arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : "";
        var userId =
          arguments.length > 3 && arguments[3] !== undefined
            ? arguments[3]
            : "";
        var context = this,
          logintoken = void 0;
        return new Promise(function(fulfill, reject) {
          context
            .isConnected()
            .then(function() {
              fetch(_connection2.default.getResturl() + url, {
                method: "POST",
                timeout: 1000 * 1 * 60,
                headers: {
                  Accept: "application/json",
                  "Content-Type": "multipart/form-data;",
                  "x-auth-token": token,
                  "x-user-id": userId
                },
                body: params
              })
                .then(function(response) {
                  return response.text();
                })
                .then(function(responseText) {
                  fulfill(JSON.parse(responseText));
                })
                .catch(function(error) {
                  console.warn(error);
                  fulfill({
                    message:
                      "Please check your internet connectivity or our server is not responding."
                  });
                });
            })
            .catch(function(error) {
              fulfill({
                message:
                  "Please check your internet connectivity or our server is not responding."
              });
            });
        });
      }
    },
    {
      key: "fetchAddressWithPostalCode",
      value: function fetchAddressWithPostalCode(postalCode) {
        var context = this;
        return new Promise(function(fulfill, reject) {
          context
            .isConnected()
            .then(function() {
              fetch(
                "https://api.ideal-postcodes.co.uk/v1/postcodes/" +
                  postalCode +
                  "?api_key=" +
                  _constants2.default.AddressApiKey,
                {
                  method: "GET",
                  timeout: 1000 * 1 * 60,
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                  }
                }
              )
                .then(function(response) {
                  return response.text();
                })
                .then(function(responseText) {
                  console.log("responseText*****", responseText);
                  fulfill(JSON.parse(responseText));
                })
                .catch(function(error) {
                  console.warn("error", error);
                  fulfill({
                    message:
                      "Please check your internet connectivity or our server is not responding."
                  });
                });
            })
            .catch(function(error) {
              console.warn("error", error);
              fulfill({
                message:
                  "Please check your internet connectivity or our server is not responding."
              });
            });
        });
      }
    }
  ]);
  return RestClient;
})();
exports.default = RestClient;
