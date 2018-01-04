Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureStore;
var _redux = require("redux");
var _reduxPersist = require("redux-persist");
var _reactNative = require("react-native");
var _remoteReduxDevtools = require("remote-redux-devtools");
var _remoteReduxDevtools2 = _interopRequireDefault(_remoteReduxDevtools);
var _reduxThunk = require("redux-thunk");
var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
var _redux2 = require("../redux");
var _redux3 = _interopRequireDefault(_redux2);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function configureStore() {
  var store = (0, _redux.createStore)(
    (0, _redux3.default)(),
    (0, _redux.compose)(
      (0, _remoteReduxDevtools2.default)({
        name: _reactNative.Platform.OS,
        hostname: "localhost",
        port: 5678
      })
    ),
    (0, _redux.applyMiddleware)(_reduxThunk2.default)
  );
  var persistor = (0, _reduxPersist.persistStore)(store);
  return { persistor: persistor, store: store };
}
