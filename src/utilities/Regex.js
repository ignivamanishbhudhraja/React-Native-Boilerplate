/*
 * @file: Regex.js
 * @description: Regex used for validation in application.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* eslint-disable */
'use strict';

let Regex = {
  validateEmail: function(val) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  },

  validateEmoji: function(text) {
    let reg = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return reg.test(text);
  },

  validateMobile: function(text) {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(text);
  },

  validateMobileWithoutCC: function(val) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(val);
  },

  validateString: function(val) {
    let stringRegex = /^[a-zA-Z\x20]{3,25}$/;
    let emogiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    if (stringRegex.test(val)) {
      return !emogiRegex.test(val);
    }
    return false;
  },

  validateStringMinimumLength2: function(val) {
    return /^[a-zA-Z\x20]{2,25}$/.test(val);
  },

  validatePassword: function(val) {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]\S{5,16}$/.test(val);
  },

  validateNumbers: function(val) {
    return /^[0-9]{0,}$/.test(val);
  },

  validateURL: function(url) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      url
    );
  },

  validatePrice(val) {
    return /^(\d*([.,](?=\d{1}))?\d+)?$/.test(val);
  },

  validateAlphaNumberic(val) {
    return /^[a-zA-Z0-9]*$/.test(val);
  },

  getNumbericValuesFromString(val) {
    return val.match(/^\d+|\d+\b|\d+(?=\w)/g);
  },

  validateDecimalNumbers(val) {
    return /^((\d|[1-9]\d+)(\.\d{0,1})?|\.\d{0,1})$/.test(val);
  },

  /**
   * Method used to remove trailing zeros after decimal point.
   */

  removeTrailingZeros(amount) {
    amount = amount.toString();
    let regEx2 = /[0]+$/; // to check zeros after decimal point
    let regEx3 = /[.]$/; // remove decimal point.
    if (amount.indexOf('.') > -1) {
      amount = amount.replace(regEx2, ''); // Remove trailing 0's
      amount = amount.replace(regEx3, '');
    }
    return parseFloat(amount).toFixed(2);
  },

  /**
   * Regex to validate registration noumber of UK vehicles.
   */

  validateVehicleReg(number) {
    let regex = /^([A-Z]{3}\s?(\d{3}|\d{2}|d{1})\s?[A-Z])|([A-Z]\s?(\d{3}|\d{2}|\d{1})\s?[A-Z]{3})|(([A-HK-PRSVWY][A-HJ-PR-Y])\s?([0][2-9]|[1-9][0-9])\s?[A-HJ-PR-Z]{3})$/;
    return regex.test(number.trim().toUpperCase());
  },
  /**
   * Regex to validate
   */

  validateGreaterthanZero(number) {
    let regex = /^(0*[1-9][0-9]*)$/;
    return regex.test(number.toUpperCase());
  },

  /**
   * Regex to validate UK postal code without any emoji
   */

  validatePostalCode(val) {
    let stringRegex = /^[a-zA-Z0-9]*$/; // will eliminate this regex and use only vehicleRegex in production.
    let vehicleRegex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g;
    if (!vehicleRegex.test(val)) {
      return stringRegex.test(val);
    }
    return true;
  }
};

module.exports = Regex;
