/**
 * @file: NoRecord.js
 * @description: Show when we dont have any records.
 * @date: 03.Jan.2018
 * @author: Manish Budhiraja
 */
/* @flow */

'use strict';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from '../../constants';

type Props = {
  info: string,
  container: View.propTypes.style,
  textStyle: Text.propTypes.style
};

const NoRecord = (props: Props) => {
  const { container, textStyle, info } = props;
  return (
    <View style = {[styles.container, container]}>
      <Text style = {[styles.info, textStyle]}>{info}</Text>
    </View>
  );
};

NoRecord.defaultProps = {
  info: 'No Record Found.',
  container: {},
  textStyle: {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  info: {
    textAlign: 'center',
    color: Constants.Colors.Black,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 35,
    ...Constants.Fonts.content
  }
});

export default NoRecord;
