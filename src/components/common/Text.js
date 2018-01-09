/*
 * @file: Text.js
 * @description: Simple component for showing text information.
 * @date: 09.Jan.2018
 * @author: Manish Budhiraja
 * */

/* @flow */

'use strict';

import React from 'react';
import { Text as DefaultText, StyleSheet } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

type Props = {
  children: any,
  style: Text.propTypes.style,
};

const Text = (props: Props) => {
  const { children, style } = props;
  return (
    <DefaultText style = {[styles.textStyle, style]}>
      {children}
    </DefaultText>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: Constants.Colors.Black,
    ...Constants.Fonts.tiny
  }
});

Text.defaultProps = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style : {}
};

export default Text;
