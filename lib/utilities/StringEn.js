"use strict";
String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};
String.prototype.capitalizeEachLetter = function() {
  return this.toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.capitalizeFirstLetter();
    })
    .join(" ");
};
String.prototype.capitalizeEachLetterSubString = function(endpoint) {
  var length = this.length;
  if (length > endpoint) {
    return (
      this.toLowerCase()
        .split(" ")
        .map(function(word) {
          return word.capitalizeFirstLetter();
        })
        .join(" ")
        .substring(0, endpoint - 2) + "..."
    );
  } else {
    return this.toLowerCase()
      .split(" ")
      .map(function(word) {
        return word.capitalizeFirstLetter();
      })
      .join(" ");
  }
};
String.prototype.capitalizeFirstLetterSubString = function(endpoint) {
  var length = this.length;
  if (length > endpoint) {
    return (
      this.charAt(0).toUpperCase() +
      this.toLowerCase()
        .slice(1)
        .substring(0, endpoint - 2) +
      "..."
    );
  }
  return this.charAt(0).toUpperCase() + this.toLowerCase().slice(1);
};
