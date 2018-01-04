/**
 * @file: FormTextInput.js
 * @description: Component for Text Inputs.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */


'use strict';
import React, { PropTypes, Component } from "react";
import { View, Image, StyleSheet, Dimensions, TextInput, Text, Platform } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Constants from '../../constants';

class FormTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
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
      <View style={[styles.containerStyle, this.props.style, { borderColor: (this.state.isFocused) ? Constants.Colors.AccentColor : Constants.Colors.BlurGrey }]}>
        {
          this.props.icon &&
          <Image resizeMode="contain" source={this.props.icon} style={[styles.iconStyle, this.props.iconStyle]} />
        }
        {
          this.props.price &&
          <Text style={[styles.price, this.props.priceStyle]}>{Constants.i18n.common.pound}</Text>
        }
        <View style={{ flex: 1 }}>
          <TextInput
            ref='inputBox'
            autoCorrect={this.props.autoCorrect ? this.props.children.autoCorrect : false}
            autoCapitalize={this.props.autoCapitalize ? this.props.autoCapitalize : "none"}
            keyboardType={this.props.keyboardType}
            placeholder={this.props.placeholder}
            //placeholder={this.props.secureTextEntry?"••••••••":this.props.placeholder}
            placeholderTextColor={this.props.placeholderTextColor ? this.props.placeholderTextColor : Constants.Colors.Gray}
            onChangeText={this.props.onChangeText}
            onChange={(event) => this.onChange(event)}
            value={this.props.value}
            onFocus={() => this.onFocus()}
            onBlur={() => this.setState({ isFocused: false })}
            style={[styles.textInputStyle, this.props.textInputStyle]}
            returnKeyType={this.props.returnKeyType}
            onSubmitEditing={this.props.onSubmitEditing}
            secureTextEntry={this.props.secureTextEntry}
            maxLength={this.props.maxLength}
            selectionColor={Constants.Colors.AccentColor}
            underlineColorAndroid={Constants.Colors.Transparent}
            autoFocus={this.props.autoFocus}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    ...Platform.select({
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
      },
      ios: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 5,
      }
    })
  },
  textInputStyle: {
    ...Constants.Fonts.regular,
    ...Platform.select({
      android: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 7,
      },
      ios: {
        height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 5,
      }
    })
  },
  iconStyle: {
    width: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.9,
    height: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1.9,
    marginRight: Constants.BaseStyle.DEVICE_WIDTH / 100 * 5
  },
  price: {
    ...Constants.Fonts.regular,
    color: Constants.Colors.Gray,
    marginRight: 5
  }
});


FormTextInput.defaultProps = {
  autoFocus: false
};

FormTextInput.PropTypes = {
  returnKeyType: PropTypes.string,
  icon: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  style: PropTypes.object,
  textInputStyle: PropTypes.object,
  placeholderTextColor: PropTypes.string,
  iconStyle: PropTypes.object
};

export default FormTextInput;