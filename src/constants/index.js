/*
 * @file: index.js
 * @description: default data for the application
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';

module.exports = {
  BaseStyle: require('./BaseStyle'),
  Colors: require('./Colors'),
	Fonts: require('./Fonts'),
  i18n: require('./i18n'),
  Images: require('./Images'),
  MapStyle : require('./MapStyle'),
  DevKeys : require('./DevlopmentKeys'),
  Delta : {
    latitude:0.0922,
    longitude:0.0421
  },
  RequestResponseTime : 20, // seconds
  ResendOTPTime : 59 // seconds
};