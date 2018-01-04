"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopLoader = exports.handleLoader = undefined;
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
exports.default = reducer;
var _Actions = require("../Actions");
var handleLoader = (exports.handleLoader = function handleLoader() {
  return { type: _Actions.LOADER_VISIBLITY };
});
var stopLoader = (exports.stopLoader = function stopLoader() {
  return { type: _Actions.STOP_LOADER };
});
var initialState = { isLoading: false };
function reducer() {
  var state =
    arguments.length > 0 && arguments[0] !== undefined
      ? arguments[0]
      : initialState;
  var action = arguments[1];
  switch (action.type) {
    case _Actions.STOP_LOADER:
      return _extends({}, state, { isLoading: false });
    case _Actions.LOADER_VISIBLITY:
      return _extends({}, state, { isLoading: !state.isLoading });
    default:
      return state;
  }
}
