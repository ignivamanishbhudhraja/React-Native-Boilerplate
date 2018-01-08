/*
 * @file: Button.js
 * @description: Button class.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 * */

/* @flow */
'use strict';

import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
  Platform
} from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

type Props = {
  onPress: PropTypes.func.isRequired,
  buttonStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
  buttonName: string,
  disabled: boolean
};

const Button = (props: Props) => {
  let { disabled, onPress, buttonStyle, buttonName, textStyle } = props;

  if (Platform.OS == 'ios') {
    return (
      <TouchableOpacity
        activeOpacity = {0.9}
        style = {[styles.buttonStyle, buttonStyle]}
        disabled = {disabled}
        onPress = {onPress}
      >
        <Text style = {[styles.text, textStyle]}>{buttonName}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableNativeFeedback
      activeOpacity = {0.9}
      style = {[styles.buttonStyle, buttonStyle]}
      disabled = {disabled}
      onPress = {onPress}
    >
      <Text style = {[styles.text, textStyle]}>{buttonName}</Text>
    </TouchableNativeFeedback>
  );
};

Button.defaultProps = {
  disabled: false,
  buttonStyle: {},
  textStyle: {},
  buttonName: ''
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: Constants.BaseStyle.DEVICE_HEIGHT * 7 / 100,
    backgroundColor: Constants.Colors.ButtonColor,
    width: Constants.BaseStyle.DEVICE_WIDTH * 70 / 100,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    ...Constants.Fonts.content_bold,
    color: Constants.Colors.White
  }
});

module.exports = Button;
