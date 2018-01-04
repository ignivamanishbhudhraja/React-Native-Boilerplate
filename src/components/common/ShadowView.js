/**
 * @file: ShadowView.js
 * @description: Used as container for shadow.
 * @date: 03.Jan.2018
 * @author: Manish Budhiraja
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Image, } from 'react-native';
import Constants from "../../constants";

const ShadowView = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.children}
    </View>
  );
};

ShadowView.defaultProps = {
  containerStyle : {},
}

const styles = StyleSheet.create({
  container:{
    flex  : 1,
    width : Constants.BaseStyle.DEVICE_WIDTH,
    height : Constants.BaseStyle.DEVICE_HEIGHT,
    ...Constants.BaseStyle.SHADOW_STYLE
  },
});

export default ShadowView;