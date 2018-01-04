/**
 * @file: NoRecord.js
 * @description: Show when we dont have any records.
 * @date: 03.Jan.2018
 * @author: Manish Budhiraja
 */
/* @flow */

"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Constants from "../../constants";

const NoRecord = props => {
  const { container, textStyle, info } = props;
  return (
    <View style={[styles.container, container]}>
      <Text style={[styles.info, textStyle]}>{info}</Text>
    </View>
  );
};

NoRecord.defaultProps = {
  info: "No Record Found.",
  container: {},
  textStyle: {}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  info: {
    textAlign: "center",
    color: Constants.Colors.Black,
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 35,
    ...Constants.Fonts.content
  }
});

export default NoRecord;
