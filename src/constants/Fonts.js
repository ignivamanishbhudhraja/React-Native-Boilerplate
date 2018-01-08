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
    fontFamily: 'MerriweatherSans-Light'
  },
  regular: {
    fontSize: moderateScale(14),
    fontFamily: 'MerriweatherSans-Light'
  },
  regularBold: {
    fontSize: moderateScale(14),
    fontFamily: 'MerriweatherSans-Regular'
  },
  normalBold: {
    fontSize: moderateScale(15),
    fontFamily: 'MerriweatherSans-Regular'
  },
  content: {
    fontSize: moderateScale(16),
    fontFamily: 'MerriweatherSans-Light'
  },
  contentBold: {
    fontSize: moderateScale(16),
    fontFamily: 'MerriweatherSans-Regular'
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontFamily: 'MerriweatherSans-Light'
  },
  subtitleBold: {
    fontSize: moderateScale(18),
    fontFamily: 'MerriweatherSans-Regular'
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: 'MerriweatherSans-Light'
  },
  titleBold: {
    fontSize: moderateScale(20),
    fontFamily: 'MerriweatherSans-Regular'
  },
  tabHeader: {
    fontSize: moderateScale(22),
    fontFamily: 'MerriweatherSans-Light'
  },
  tabHeaderBold: {
    fontSize: moderateScale(22),
    fontFamily: 'MerriweatherSans-Regular'
  },
  headers: {
    fontSize: moderateScale(20),
    fontFamily: 'MerriweatherSans-Light'
  },
  headersBold: {
    fontSize: moderateScale(20),
    fontFamily: 'MerriweatherSans-Regular'
  },
  textInput: {
    fontSize: moderateScale(16),
    fontFamily: 'MerriweatherSans-Light'
  },
  tinyBold: {
    fontSize: moderateScale(12),
    fontFamily: 'MerriweatherSans-Regular'
  },
  tiny: {
    fontSize: moderateScale(12),
    fontFamily: 'MerriweatherSans-Light'
  },
  tinyMedium: {
    fontSize: moderateScale(11),
    fontFamily: 'MerriweatherSans-Light'
  },
  tinyMediumBold: {
    fontSize: moderateScale(11),
    fontFamily: 'MerriweatherSans-Regular'
  },
  tinyLarge: {
    fontSize: moderateScale(13),
    fontFamily: 'MerriweatherSans-Light'
  },
  tinyLargeBold: {
    fontSize: moderateScale(13),
    fontFamily: 'MerriweatherSans-Regular'
  },
  largest: {
    fontSize: moderateScale(22),
    fontFamily: 'MerriweatherSans-Light'
  },
  largestBold: {
    fontSize: moderateScale(22),
    fontFamily: 'MerriweatherSans-Regular'
  },
  mediumSize: {
    fontSize: moderateScale(11),
    fontFamily: 'MerriweatherSans-Light',
    lineHeight: 20
  },
  mediumSizeBold: {
    fontSize: moderateScale(11),
    fontFamily: 'MerriweatherSans-Regular',
    lineHeight: 20
  },
  navHeader: {
    fontSize: moderateScale(17),
    fontFamily: 'MerriweatherSans-Regular'
  },
  markerTextStyle: {
    fontSize: moderateScale(9),
    fontFamily: 'MerriweatherSans-Regular'
  }
};

module.exports = Fonts;
