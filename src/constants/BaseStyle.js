/*
 * @file: BaseStyle.js
 * @description: Base Style for the application
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use-strict';

import Dimensions from 'Dimensions';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from Phone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
const BaseStyle = {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  MARGIN: em(1.5),
  MARGINHORIZONTAL: em(0.5),

  // DRAWER
  DRAWER_WIDTH: x * 0.53,
  DRAWER_HEIGHT: y,
  DRAWER_OFFSET: 0.3,

  //header
  HEADER_HEIGHT: x / 100 * 15,

  HIT_SLOP: { top: 10, left: 10, right: 10, bottom: 10 },

  HALF_HIT_SLOP: { top: 5, left: 5, right: 5, bottom: 5 },

  SHADOW_STYLE: {
    shadowColor: '#737373',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: 1, height: 1 },
    elevation: 5
  }
};

module.exports = BaseStyle;
