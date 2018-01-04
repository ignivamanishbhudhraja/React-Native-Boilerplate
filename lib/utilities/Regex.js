"use strict";
var Regex = {
  validateEmail: function validateEmail(val) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  },
  validateEmoji: function validateEmoji(text) {
    var reg = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    return reg.test(text);
  },
  validateMobile: function validateMobile(text) {
    return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(text);
  },
  validateMobileWithoutCC: function validateMobileWithoutCC(val) {
    return /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(
      val
    );
  },
  validateString: function validateString(val) {
    var stringRegex = /^[a-zA-Z\x20]{3,25}$/;
    var emogiRegex = /[\uD83C-\uDBFF\uDC00-\uDFFF]+/g;
    if (stringRegex.test(val)) {
      return !emogiRegex.test(val);
    }
    return false;
  },
  validateStringMinimumLength2: function validateStringMinimumLength2(val) {
    return /^[a-zA-Z\x20]{2,25}$/.test(val);
  },
  validatePassword: function validatePassword(val) {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]\S{5,16}$/.test(val);
  },
  validateNumbers: function validateNumbers(val) {
    return /^[0-9]{0,}$/.test(val);
  },
  validateURL: function validateURL(url) {
    return /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(
      url
    );
  },
  validatePrice: function validatePrice(val) {
    return /^(\d*([.,](?=\d{1}))?\d+)?$/.test(val);
  },
  validateAlphaNumberic: function validateAlphaNumberic(val) {
    return /^[a-zA-Z0-9]*$/.test(val);
  },
  getNumbericValuesFromString: function getNumbericValuesFromString(val) {
    return val.match(/^\d+|\d+\b|\d+(?=\w)/g);
  },
  validateDecimalNumbers: function validateDecimalNumbers(val) {
    return /^((\d|[1-9]\d+)(\.\d{0,1})?|\.\d{0,1})$/.test(val);
  },
  removeTrailingZeros: function removeTrailingZeros(amount) {
    amount = amount.toString();
    var regEx1 = /^[0]+/;
    var regEx2 = /[0]+$/;
    var regEx3 = /[.]$/;
    if (amount.indexOf(".") > -1) {
      amount = amount.replace(regEx2, "");
      amount = amount.replace(regEx3, "");
    }
    return parseFloat(amount).toFixed(2);
  },
  validateVehicleReg: function validateVehicleReg(number) {
    var regex = /^([A-Z]{3}\s?(\d{3}|\d{2}|d{1})\s?[A-Z])|([A-Z]\s?(\d{3}|\d{2}|\d{1})\s?[A-Z]{3})|(([A-HK-PRSVWY][A-HJ-PR-Y])\s?([0][2-9]|[1-9][0-9])\s?[A-HJ-PR-Z]{3})$/;
    return regex.test(number.trim().toUpperCase());
  },
  validateGreaterthanZero: function validateGreaterthanZero(number) {
    var regex = /^(0*[1-9][0-9]*)$/;
    return regex.test(number.toUpperCase());
  },
  validatePostalCode: function validatePostalCode(val) {
    var stringRegex = /^[a-zA-Z0-9]*$/;
    var vehicleRegex = /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/g;
    if (!vehicleRegex.test(val)) {
      return stringRegex.test(val);
    }
    return true;
  }
};
module.exports = Regex;
