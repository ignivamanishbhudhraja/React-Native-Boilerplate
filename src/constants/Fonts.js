/*
 * @file: Fonts.js
 * @description: App Fonts
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use-strict';
import BaseStyle from './BaseStyle';
import { Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from "../utilities/ResponsiveFonts";

let Fonts = {
  smallRegular:{
      fontSize:moderateScale(13),
      fontFamily:'MerriweatherSans-Light',
    },
    regular:{
      fontSize:moderateScale(14),
      fontFamily:'MerriweatherSans-Light',
    },
    regularBold:{
      fontSize:moderateScale(14),
      fontFamily:'MerriweatherSans-Regular',
    },
    normalBold:{
      fontSize:moderateScale(15),
      fontFamily:'MerriweatherSans-Regular',
    },
    content:{
      fontSize:moderateScale(16),
      fontFamily:'MerriweatherSans-Light',
    },
    contentBold:{
      fontSize:moderateScale(16),
      fontFamily:'MerriweatherSans-Regular',
    },
    subtitle:{
      fontSize:moderateScale(18),
      fontFamily:'MerriweatherSans-Light',
    },
    subtitle_bold:{
      fontSize:moderateScale(18),
      fontFamily:'MerriweatherSans-Regular',
    },
    title:{
      fontSize:moderateScale(20),
      fontFamily:'MerriweatherSans-Light',
    },
    title_bold:{
      fontSize:moderateScale(20),
      fontFamily:'MerriweatherSans-Regular',
    },
    tab_header:{
      fontSize:moderateScale(22),
      fontFamily:'MerriweatherSans-Light',
    },
    tab_header_bold:{
      fontSize:moderateScale(22),
      fontFamily:'MerriweatherSans-Regular',
    },
    headers:{
      fontSize:moderateScale(20),
      fontFamily:'MerriweatherSans-Light',
    },
    headers_bold:{
      fontSize:moderateScale(20),
      fontFamily:'MerriweatherSans-Regular',
    },
    text_input:{
      fontSize:moderateScale(16),
      fontFamily:'MerriweatherSans-Light',
    },
    tiny_bold:{
      fontSize:moderateScale(12),
      fontFamily:'MerriweatherSans-Regular',
    },
    tiny:{
      fontSize:moderateScale(12),
      fontFamily:'MerriweatherSans-Light',
    },
    tinyMedium:{
      fontSize:moderateScale(11),
      fontFamily:'MerriweatherSans-Light',
    },
    tinyMedium_bold:{
      fontSize:moderateScale(11),
      fontFamily:'MerriweatherSans-Regular',
    },
    tinyLarge:{
      fontSize:moderateScale(13),
      fontFamily:'MerriweatherSans-Light',
    },
    tinyLargeBold:{
      fontSize:moderateScale(13),
      fontFamily:'MerriweatherSans-Regular',
    },
    content_bold:{
      fontSize:moderateScale(16),
      fontFamily:'MerriweatherSans-Regular',
    },
    largest: {
      fontSize:moderateScale(22),
      fontFamily:'MerriweatherSans-Light',
    },
    largest_bold: {
      fontSize:moderateScale(22),
      fontFamily:'MerriweatherSans-Regular',
    },
    mediumSize:{
      fontSize:moderateScale(11),
      fontFamily:'MerriweatherSans-Light',
      lineHeight : 20
    },
    mediumSizeBold:{
      fontSize:moderateScale(11),
      fontFamily:'MerriweatherSans-Regular',
      lineHeight : 20
    },
    nav_header:{
      fontSize:moderateScale(17),
      fontFamily:'MerriweatherSans-Regular',
    },
    markerTextStyle :{
      fontSize:moderateScale(9),
      fontFamily:'MerriweatherSans-Regular',
    }
}

module.exports = Fonts
