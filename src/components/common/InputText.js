/**
 * @file: InputText.js
 * @description: Comonent for Text Inputs.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

'use strict';
/* @flow */
import React from 'react';
import { View, StyleSheet, TextInput, Text, Image, TouchableOpacity, Platform } from 'react-native';
import Constants from '../../constants';

type Props = {
  onFocus: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  returnKeyType: string,
  icon: string,
  keyboardType: string,
  placeholder: string,
  style: View.propTypes.style,
  textInputStyle: TextInput.propTypes.style,
  placeholderTextColor: string,
  autoFocus: boolean,
  secureTextEntry: boolean,
  maxLength: number,
  value: string,
  autoCapitalize: string,
  iconStyle: Image.propTypes.style,
  priceStyle: Text.propTypes.style,
  onChange: PropTypes.func.isRequired,
  autoCorrect: boolean,
  imageStyle: Image.propTypes.style,
  editable: boolean,
  containerStyle: View.propTypes.style,
  labelStyle: Text.propTypes.style,
  labelText: string,
  onImagePress: PropTypes.func.isRequired,
  image0Style: Image.propTypes.style,
  image: PropTypes.object,
  image0: PropTypes.object
};

type State = {
  isFocused: boolean
};

export default class InputText extends React.Component<Props, State> {
  textInput: ?any;

  static defaultProps = {
    autoFocus: false,
    iconStyle: {},
    secureTextEntry: false,
    maxLength: 250,
    value: '',
    autoCorrect: false,
    imageStyle: {},
    autoCapitalize: 'none',
    editable: true,
    labelText: '',
    image0: null,
    image: null
  };

  constructor(props: Object) {
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
    if (this.textInput) {
      this.textInput.focus();
    }
  }

  /**
   * Text-input onChange method.
   */

  onChange(event: any) {
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <View
        style = {[
          styles.containerStyle,
          this.props.containerStyle,
          {
            borderBottomColor: this.state.isFocused
              ? Constants.Colors.AccentColor
              : Constants.Colors.GhostWhite
          }
        ]}
      >
        <Text style = {[styles.labelStyle, this.props.labelStyle]}>{this.props.labelText}</Text>

        <View style = {styles.textInputContainer}>
          {this.props.image0 && (
            <TouchableOpacity hitSlop = {Constants.HIT_SLOP} onPress = {this.props.onImagePress}>
              <Image
                resizeMode = "contain"
                source = {this.props.image0}
                style = {[styles.image0Style, this.props.image0Style]}
              />
            </TouchableOpacity>
          )}
          <TextInput
            ref = {textInput => (this.textInput = textInput)}
            autoFocus = {this.props.autoFocus}
            autoCorrect = {this.props.autoCorrect}
            autoCapitalize = {this.props.autoCapitalize}
            keyboardType = {this.props.keyboardType}
            placeholder = {this.props.placeholder}
            placeholderTextColor = {this.props.placeholderTextColor}
            onChangeText = {this.props.onChangeText}
            onChange = {event => this.onChange(event)}
            value = {this.props.value}
            editable = {!this.props.editable}
            onFocus = {() => this.onFocus()}
            onBlur = {() => this.setState({ isFocused: false })}
            style = {[styles.textInputStyle, this.props.textInputStyle]}
            returnKeyType = {this.props.returnKeyType}
            onSubmitEditing = {this.props.onSubmitEditing}
            secureTextEntry = {this.props.secureTextEntry}
            maxLength = {this.props.maxLength}
            selectionColor = {Constants.Colors.AccentColor}
            underlineColorAndroid = {Constants.Colors.Transparent}
          />
          {this.props.image && (
            <TouchableOpacity onPress = {this.props.onImagePress}>
              <Image
                resizeMode = "contain"
                source = {this.props.image}
                style = {[styles.imageStyle, this.props.imageStyle]}
              />
            </TouchableOpacity>
          )}
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
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
        marginLeft: -Constants.BaseStyle.DEVICE_WIDTH / 100 * 1
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
