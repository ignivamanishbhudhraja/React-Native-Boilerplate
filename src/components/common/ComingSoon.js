/*
 * @file: ComingSoon.js
 * @description: Default Under Construction page for the application.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 * */

'use strict';

import React, { Component, PropTypes } from 'react';
import {
  Text,
  Image,
  View,
  TouchableHighlight,
  StyleSheet,
  Alert, 
  Linking,
  TouchableOpacity,
} from 'react-native'; 
import Constants from '../../constants';

const ComingSoon = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: props.backgroundColor}}>
      <View style = {styles.container}>
        <TouchableOpacity onPress= { props.onPress } > 
         <Text style={styles.message} numberOfLines={3}>{props.info}</Text>
        </TouchableOpacity> 
      </View>
    </View>
  )
}

ComingSoon.propTypes = {
  info: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ComingSoon.defaultProps = {
  info: 'Coming Soon',
  backgroundColor: '#fff'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'transparent'
  },
  message: {
    textAlign: 'center',
    ...Constants.Fonts.title,
    color : Constants.Colors.Black
  },
  logo: {
   // height:(Constants.BaseStyle.DEVICE_HEIGHT/100)*8.5,
    //width:(Constants.BaseStyle.DEVICE_WIDTH/100)*15,
    alignSelf:'center',
  },
});

module.exports = ComingSoon;
