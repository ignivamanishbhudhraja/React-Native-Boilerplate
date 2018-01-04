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
var _constants = require("../../src/constants");
var _constants2 = _interopRequireDefault(_constants);
var _reactNative = require("react-native");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var NAV_BAR_HEIGHT =
  _constants2.default.BaseStyle.DEVICE_HEIGHT === 812 ? 84 : 64;
var STATUS_BAR_HEIGHT = 0;
module.exports = {
  navBarContainer: _extends(
    { backgroundColor: _constants2.default.Colors.PrimaryColor },
    _reactNative.Platform.select({
      android: {
        height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 8
      },
      ios: { height: NAV_BAR_HEIGHT }
    }),
    { width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 101 }
  ),
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: _constants2.default.Colors.White
  },
  navBar: _extends(
    {},
    _reactNative.Platform.select({
      android: {
        height: _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 6
      },
      ios: { height: NAV_BAR_HEIGHT }
    }),
    {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
      width: _constants2.default.BaseStyle.DEVICE_WIDTH / 100 * 101
    }
  ),
  customTitle: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: "center"
  },
  navBarButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch"
  },
  navBarButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  navBarButtonText: { fontSize: 17, letterSpacing: 0.5 },
  navBarTitleContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    marginTop:
      _constants2.default.BaseStyle.DEVICE_HEIGHT === 812
        ? _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 4.6
        : _constants2.default.BaseStyle.DEVICE_HEIGHT / 100 * 3
  },
  navBarTitleText: _extends(
    { color: _constants2.default.Colors.White },
    _constants2.default.Fonts.contentBold
  )
};
