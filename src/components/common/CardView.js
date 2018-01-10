/**
 * @file: CardView.js
 * @description: Used as container for shadow.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from '../../constants';

type Props = {
  containerStyle: View.propTypes.style,
  children: any
};

const CardView = (props: Props) => {
  return <View style = {[styles.container, props.containerStyle]}>{props.children}</View>;
};

CardView.defaultProps = {
  containerStyle: {}
};

const styles = StyleSheet.create({
  container: {
    margin:Constants.BaseStyle.DEVICE_WIDTH/100*5,
    ...Constants.BaseStyle.SHADOW_STYLE
  }
});

export default CardView;
