/**
 * @file: buttons.js
 * @description: Button for navigation.
 * @date: 04.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Text from '../common/Text';
import Constants from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  style: PropTypes.object,
  tintColor: string,
  title: string,
  icon: string,
  onPress: PropTypes.func,
  disabled: boolean,
  accessible: boolean,
  accessibilityLabel: string,
};

const NavbarButton = (props: Props) => {
  const { style, tintColor, title, icon, onPress, disabled, accessible, accessibilityLabel } = props;

  if(!title){
    return(
      <TouchableNativeFeedback
        style = {styles.navBarButton}
        onPress = {onPress}
        disabled = {disabled}
        accessible = {accessible}
        accessibilityLabel = {accessibilityLabel}
        hitSlop = {Constants.BaseStyle.HIT_SLOP}
      >
        <View style = {style}>
          <Icon name = {icon} size = {45} color = {tintColor} />
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableNativeFeedback
      style = {styles.navBarButton}
      onPress = {onPress}
      disabled = {disabled}
      accessible = {accessible}
      accessibilityLabel = {accessibilityLabel}
    >
      <View style = {style}>
        <Text style = {[styles.navBarButtonText, { color: tintColor }]}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

NavbarButton.defaultProps = {
  style: {},
  title: '',
  tintColor: Constants.Colors.White,
  disabled: false,
  onPress: () => ({}),
  icon : 'angle-left'
};

export default NavbarButton;