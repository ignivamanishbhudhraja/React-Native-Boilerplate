/*
 * @file: ComingSoon.js
 * @description: Default Under Construction page for the application.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 * */

/* @flow */

'use strict';

import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from '../../constants';
import PropTypes from 'prop-types';

type Props = {
  message: string,
  backgroundColor: string,
  onPress: PropTypes.func.isRequired,
  numberOfLines: number
};

const ComingSoon = (props: Props) => {
  let { onPress, message, numberOfLines } = props;
  return (
    <View style = {styles.container}>
      <View style = {styles.wrapper}>
        <TouchableOpacity onPress = {onPress}>
          <Text style = {styles.message} numberOfLines = {numberOfLines}>
            {message}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ComingSoon.defaultProps = {
  message: 'Coming Soon',
  backgroundColor: '#fff',
  numberOfLines: 3
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Constants.Colors.Transparent
  },
  message: {
    textAlign: 'center',
    ...Constants.Fonts.title,
    color: Constants.Colors.Black
  }
});

module.exports = ComingSoon;
