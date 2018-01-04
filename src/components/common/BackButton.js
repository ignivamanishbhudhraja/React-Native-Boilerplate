/**
 * @file: BackButton.js
 * @description: Back Button Module for Navigation Bar.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */
/* @flow */
"use strict";
import React, { Component } from "react";
import {
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Platform
} from "react-native";
import Constants from "../../constants";

const BackButton = props => {
  let {
    label,
    onPress,
    title,
    containerStyle,
    buttonStyle,
    textStyle,
    imageStyle
  } = props;
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableHighlight
        hitSlop={Constants.BaseStyle.HIT_SLOP}
        underlayColor={Constants.Colors.Transparent}
        style={[styles.button, buttonStyle]}
        onPress={onPress}
      >
        {title ? (
          <Text style={[styles.textStyle, textStyle]}>{title}</Text>
        ) : (
          <Image
            source={Constants.Images.ic_nav_white_back}
            style={[styles.backImage, imageStyle]}
          />
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Constants.Colors.PrimaryColor
  },
  button: {
    backgroundColor: Constants.Colors.Transparent,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 12,
    marginLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2,
    marginTop:
      Constants.BaseStyle.DEVICE_HEIGHT === 812
        ? Constants.BaseStyle.DEVICE_HEIGHT / 100 * 4.2
        : Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2.5
  },
  backImage: {
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 4.5,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 7,
    alignSelf: "center"
  },
  textStyle: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Constants.Colors.Transparent,
    color: Constants.Colors.White,
    ...Constants.Fonts.contentBold
  }
});

BackButton.defaultProps = {
  title: ""
};

module.exports = BackButton;
