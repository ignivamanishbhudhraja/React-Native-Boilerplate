/*
 * @file: Button.js
 * @description: Button class.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 * */

'use strict';

import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Constants from '../../constants';

export default class Button extends Component{
  // Default render function
  render(){
    let { buttonStyle, image, imageStyle, text, textStyle, image2, imageStyle2 } = this.props;
    return(
      <TouchableOpacity
        activeOpacity={0.9}
        style={[styles.buttonStyle, buttonStyle]}
        disabled={(this.props.disabled !== undefined && this.props.disabled == true) ? true : false} 
        onPress={this.props.onPress}
      >
        {
          image &&
          <Image
            source={image}
            style={[styles.imageStyle, imageStyle]}
          />
        }
        <Text style={[styles.text, textStyle]}>
          {text}
        </Text>
        {
          image2 &&
          <Image
            source={image2}
            style={[styles.imageStyle2, imageStyle2]}
          />
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: Constants.BaseStyle.DEVICE_HEIGHT*7/100,
    backgroundColor: Constants.Colors.AccentColor,
    // width: Constants.BaseStyle.DEVICE_WIDTH*85/100,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  imageStyle: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    marginRight: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2
  },
  text: {
    ...Constants.Fonts.content_bold,
    color: Constants.Colors.White
  },
  imageStyle2: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.5,
    marginLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 2
  }
});
