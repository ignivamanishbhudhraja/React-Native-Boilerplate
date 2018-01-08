/**
 * @file: BackButton.js
 * @description: Back Button Module for Navigation Bar.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

import React from 'react';
import { Image, TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

type Props = {
  title: string,
  containerStyle: View.propTypes.style,
  buttonStyle: View.propTypes.style,
  textStyle: Text.propTypes.style,
  imageStyle: Image.propTypes.style,
  onPress: PropTypes.func.isRequired
};

const BackButton = (props: Props) => {
  let { onPress, title, containerStyle, buttonStyle, textStyle, imageStyle } = props;
  return (
    <View style = {[styles.container, containerStyle]}>
      <TouchableHighlight
        hitSlop = {Constants.BaseStyle.HIT_SLOP}
        underlayColor = {Constants.Colors.Transparent}
        style = {[styles.button, buttonStyle]}
        onPress = {onPress}
      >
        {title ? (
          <Text style = {[styles.textStyle, textStyle]}>{title}</Text>
        ) : (
          <Image
            source = {Constants.Images.ic_nav_white_back}
            style = {[styles.backImage, imageStyle]}
          />
        )}
      </TouchableHighlight>
    </View>
  );
};

BackButton.defaultProps = {
  title: '',
  containerStyle: {},
  buttonStyle: {},
  textStyle: {},
  imageStyle: {}
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
    alignSelf: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Constants.Colors.Transparent,
    color: Constants.Colors.White,
    ...Constants.Fonts.contentBold
  }
});

module.exports = BackButton;
