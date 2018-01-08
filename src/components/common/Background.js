/**
 * @file: background.js
 * @description: Use to show background of application pages.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Constants from '../../constants';

type Props = {
  children?: any,
  style: Image.propTypes.style
};

const Background = (props: Props) => {
  return (
    <Image source = {Constants.Images.background} style = {[styles.container, props.style]}>
      {props.children}
    </Image>
  );
};

Background.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Constants.BaseStyle.DEVICE_WIDTH,
    height: Constants.BaseStyle.DEVICE_HEIGHT
  }
});
