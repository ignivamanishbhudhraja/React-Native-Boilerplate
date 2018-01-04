/**
 * @file: InputText.js
 * @description: Comonent for Text Inputs.
 * @date: 18.09.2017
 * @author: Vishal Kumar
 */

'use strict';

import React, { PropTypes, Component } from "react";
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Platform } from "react-native";
import Constants from '../../constants';

export default class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }

  /**
  * Text-input onFocus method. 
  */

  onFocus() {
    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  /**
  * Text-input focus method for return key.
  */

  focus() {
    this.refs.inputBox.focus();
  }

  /**
  * Text-input onChange method.
  */

  onChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event)
    }
  }

  render() {
    return (
      <View
        style={[
          styles.containerStyle,
          this.props.containerStyle,
          { borderBottomColor: (this.state.isFocused) ? Constants.Colors.AccentColor : Constants.Colors.GhostWhite }
        ]}
      >
        <Text style={[styles.labelStyle, this.props.labelStyle]}>
          {this.props.labelText}
        </Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          {
            this.props.image0 &&
            <TouchableOpacity hitSlop={Constants.HIT_SLOP} onPress={this.props.onImagePress}>
              <Image
                resizeMode="contain"
                source={this.props.image0}
                style={[styles.image0Style, this.props.image0Style]}
              />
            </TouchableOpacity>
          }
          <TextInput
            ref='inputBox'
            autoFocus={this.props.autoFocus}
            autoCorrect={this.props.autoCorrect ? this.props.children.autoCorrect : false}
            autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize : "none"}
            keyboardType={this.props.keyboardType}
            placeholder={this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor}
            onChangeText={this.props.onChangeText}
            onChange={(event) => this.onChange(event)}
            value={this.props.value}
            editable={!this.props.editable}
            onFocus={() => this.onFocus()}
            onBlur={() => this.setState({ isFocused: false })}
            style={[styles.textInputStyle, this.props.textInputStyle]}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            secureTextEntry={this.props.secureTextEntry}
            maxLength={this.props.maxLength}
            selectionColor={Constants.Colors.AccentColor}
            underlineColorAndroid={Constants.Colors.Transparent}
          />
          {
            this.props.image &&
            <TouchableOpacity onPress={this.props.onImagePress}>
              <Image
                resizeMode="contain"
                source={this.props.image}
                style={[styles.imageStyle, this.props.imageStyle]}
              />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    paddingVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2
  },
  labelStyle: {
    ...Constants.Fonts.tiny,
    color: Constants.Colors.Gray
  },
  textInputStyle: {
    ...Constants.Fonts.regular,
    marginTop: 3,
    flex: 1,
    color: Constants.Colors.Black,
    ...Platform.select({
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
        marginLeft : -Constants.BaseStyle.DEVICE_WIDTH / 100 * 1
      },
      ios: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 4
      }
    })
  },
  imageStyle: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3,
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3,
    marginLeft: Constants.BaseStyle.DEVICE_WIDTH / 100 * 6
  },
  image0Style: {
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    marginRight: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5
  }
});

InputText.PropTypes = {
  returnKeyType: PropTypes.string,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  style: PropTypes.object,
  bool: PropTypes.bool,
  image: PropTypes.string,
  imageStyle: PropTypes.object
};
