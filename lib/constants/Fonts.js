"use-strict";
var _BaseStyle = require("./BaseStyle");
var _BaseStyle2 = _interopRequireDefault(_BaseStyle);
var _reactNative = require("react-native");
var _ResponsiveFonts = require("../utilities/ResponsiveFonts");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Fonts = {
  smallRegular: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(13),
    fontFamily: "MerriweatherSans-Light"
  },
  regular: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(14),
    fontFamily: "MerriweatherSans-Light"
  },
  regularBold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(14),
    fontFamily: "MerriweatherSans-Regular"
  },
  normalBold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(15),
    fontFamily: "MerriweatherSans-Regular"
  },
  content: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(16),
    fontFamily: "MerriweatherSans-Light"
  },
  contentBold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(16),
    fontFamily: "MerriweatherSans-Regular"
  },
  subtitle: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(18),
    fontFamily: "MerriweatherSans-Light"
  },
  subtitle_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(18),
    fontFamily: "MerriweatherSans-Regular"
  },
  title: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(20),
    fontFamily: "MerriweatherSans-Light"
  },
  title_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(20),
    fontFamily: "MerriweatherSans-Regular"
  },
  tab_header: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(22),
    fontFamily: "MerriweatherSans-Light"
  },
  tab_header_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(22),
    fontFamily: "MerriweatherSans-Regular"
  },
  headers: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(20),
    fontFamily: "MerriweatherSans-Light"
  },
  headers_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(20),
    fontFamily: "MerriweatherSans-Regular"
  },
  text_input: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(16),
    fontFamily: "MerriweatherSans-Light"
  },
  tiny_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(12),
    fontFamily: "MerriweatherSans-Regular"
  },
  tiny: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(12),
    fontFamily: "MerriweatherSans-Light"
  },
  tinyMedium: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(11),
    fontFamily: "MerriweatherSans-Light"
  },
  tinyMedium_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(11),
    fontFamily: "MerriweatherSans-Regular"
  },
  tinyLarge: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(13),
    fontFamily: "MerriweatherSans-Light"
  },
  tinyLargeBold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(13),
    fontFamily: "MerriweatherSans-Regular"
  },
  content_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(16),
    fontFamily: "MerriweatherSans-Regular"
  },
  largest: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(22),
    fontFamily: "MerriweatherSans-Light"
  },
  largest_bold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(22),
    fontFamily: "MerriweatherSans-Regular"
  },
  mediumSize: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(11),
    fontFamily: "MerriweatherSans-Light",
    lineHeight: 20
  },
  mediumSizeBold: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(11),
    fontFamily: "MerriweatherSans-Regular",
    lineHeight: 20
  },
  nav_header: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(17),
    fontFamily: "MerriweatherSans-Regular"
  },
  markerTextStyle: {
    fontSize: (0, _ResponsiveFonts.moderateScale)(9),
    fontFamily: "MerriweatherSans-Regular"
  }
};
module.exports = Fonts;
