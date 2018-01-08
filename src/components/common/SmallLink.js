/*
 * @file: SmallLink.js
 * @description: Simple component for showing small links to navigate to other screen.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 * */

/* @flow */

'use strict';

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

type Props = {
  onPress: PropTypes.func.isRequired,
  text: string,
  textStyle: Text.propTypes.style,
  linkStyle: TouchableOpacity.propTypes.style
};

const SmallLink = (props: Props) => {
  const { text, onPress, textStyle, linkStyle } = props;
  return (
    <TouchableOpacity style={[styles.linkStyle, linkStyle]} onPress={onPress}>
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Constants.Colors.AccentColor,
    ...Constants.Fonts.tiny
  }
});

SmallLink.defaultProps = {
  linkStyle: {},
  textStyle: {},
  text: ''
};

export default SmallLink;
