/*
 * @file: Fonts.js
 * @description: App Fonts
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use-strict';
import { moderateScale } from '../utilities/ResponsiveFonts';

let Fonts = {
  smallRegular: {
    fontSize: moderateScale(13),
  },
  regular: {
    fontSize: moderateScale(14),
  },
  regularBold: {
    fontSize: moderateScale(14),
  },
  normalBold: {
    fontSize: moderateScale(15),
  },
  content: {
    fontSize: moderateScale(16),
  },
  contentBold: {
    fontSize: moderateScale(16),
  },
  subtitle: {
    fontSize: moderateScale(18),
  },
  subtitleBold: {
    fontSize: moderateScale(18),
  },
  title: {
    fontSize: moderateScale(20),
  },
  titleBold: {
    fontSize: moderateScale(20),
  },
  tabHeader: {
    fontSize: moderateScale(22),
  },
  tabHeaderBold: {
    fontSize: moderateScale(22),
  },
  headers: {
    fontSize: moderateScale(20),
  },
  headersBold: {
    fontSize: moderateScale(20),
  },
  textInput: {
    fontSize: moderateScale(16),
  },
  tinyBold: {
    fontSize: moderateScale(12),
  },
  tiny: {
    fontSize: moderateScale(12),
  },
  tinyMedium: {
    fontSize: moderateScale(11),
  },
  tinyMediumBold: {
    fontSize: moderateScale(11),
  },
  tinyLarge: {
    fontSize: moderateScale(13),
  },
  tinyLargeBold: {
    fontSize: moderateScale(13),
  },
  largest: {
    fontSize: moderateScale(22),
  },
  largestBold: {
    fontSize: moderateScale(22),
  },
  mediumSize: {
    fontSize: moderateScale(11),
  },
  mediumSizeBold: {
    fontSize: moderateScale(11),
  },
  navHeader: {
    fontSize: moderateScale(17),
  },
  markerTextStyle: {
    fontSize: moderateScale(9),
  }
};

module.exports = Fonts;
