/*
 * @file: StringEn.js
 * @description: String custom prototypes are defined here to manipulated strings according to need.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};

String.prototype.capitalizeEachLetter = function() {
  return this.toLowerCase()
    .split(' ')
    .map(function(word) {
      return word.capitalizeFirstLetter();
    })
    .join(' ');
};

String.prototype.capitalizeEachLetterSubString = function(endpoint) {
  let length = this.length;
  if (length > endpoint) {
    return (
      this.toLowerCase()
        .split(' ')
        .map(function(word) {
          return word.capitalizeFirstLetter();
        })
        .join(' ')
        .substring(0, endpoint - 2) + '...'
    );
  } else {
    return this.toLowerCase()
      .split(' ')
      .map(function(word) {
        return word.capitalizeFirstLetter();
      })
      .join(' ');
  }
};

String.prototype.capitalizeFirstLetterSubString = function(endpoint) {
  let length = this.length;
  if (length > endpoint) {
    return (
      this.charAt(0).toUpperCase() +
      this.toLowerCase()
        .slice(1)
        .substring(0, endpoint - 2) +
      '...'
    );
  }

  return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};
