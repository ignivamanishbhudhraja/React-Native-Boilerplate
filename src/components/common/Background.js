/**
 * @file: background.js
 * @description: Use to show background of application pages.
 * @date: 03.Jan.2018
 * @author: Manish Budhiraja
 */


'use strict';

import React, { Component } from 'react';
import { StyleSheet, Image, } from 'react-native';
import Constants from "../../constants";

export default class Background extends Component {
  constructor(props) {
    super(props);
  }

  // Default Render Function 
  render() {
    return ( 
      <Image source={Constants.Images.background} style={[styles.container, this.props.style]}>
        {this.props.children}
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex  : 1,
    width : Constants.BaseStyle.DEVICE_WIDTH,
    height : Constants.BaseStyle.DEVICE_HEIGHT,
  },
});
