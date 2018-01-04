/*
 * @file: SmallLink.js
 * @description: Simple component for showing small links to navigate to other screen 
 * @date: 18.05.2017
 * @author: Rahul Saini
 * */

import React, { PropTypes } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
let Screen = require("Dimensions").get("window");
import Constants from '../../constants';

const SmallLink = props => {
  const { text, onPress, textStyle, linkStyle } = props;
  return (
  	<TouchableOpacity style={[styles.linkStyle, linkStyle]} onPress={onPress}>
  		<Text style={[styles.textStyle,textStyle,]}>{text}</Text>
  	</TouchableOpacity>
  );
};


const styles = StyleSheet.create({
	textStyle: {
	 color:Constants.Colors.AccentColor,
   ...Constants.Fonts.tiny
	},
	linkStyle:{
		
	}
});
 
SmallLink.PropTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.object.isRequired
};

export default SmallLink;
