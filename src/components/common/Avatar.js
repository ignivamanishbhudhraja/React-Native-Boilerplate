/**
 * @file: Avatar.js
 * @description: Avatar Image for application.
 * @date: 05.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

// Import React & React Native Components, JS Libraries, Other Libraries and Modules.
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Constants from '../../constants';
import Connection from '../../config/connection';
import PropTypes from 'prop-types';

type Props = {
  container: View.propTypes.style,
  avatarStyle: Image.propTypes.style,
  originalAvatarStyle: View.propTypes.style,
  user: PropTypes.object,
  localPath: string
};

const Avatar = (props: Props) => {
  let { user, localPath, avatarStyle, container } = props;
  let defaultImage = '';
  if (localPath !== '') {
    return <Image source = {{ uri: localPath }} style = {[defaultStyles.avatarStyle, avatarStyle]} />;
  }

  if (!user || user.photo == '') {
    switch (user.role) {
    case 'user':
      defaultImage = Constants.Images.user;
      break;
    case 'business':
      defaultImage = Constants.Images.user;
      break;
    case 'driver':
      defaultImage = Constants.Images.driver;
      break;
    default:
      defaultImage = Constants.Images.user;
      break;
    }
    return (
      <View style = {[defaultStyles.container, container]}>
        <Image source = {defaultImage} style = {[defaultStyles.avatarStyle, avatarStyle]} />
      </View>
    );
  }

  let hasImage = user ? (user.photo !== '' || user.photo !== null ? true : false) : false;
  if (hasImage) {
    return (
      <View>
        <Image
          source = {{ uri: Connection.getMedia(user.photo) }}
          style = {[defaultStyles.avatarStyle, avatarStyle]}
        />
      </View>
    );
  }
};

const defaultStyles = StyleSheet.create({
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 30,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 30
  },
  container: {
    backgroundColor: Constants.Colors.PrimaryColor
  }
});

Avatar.defaultProps = {
  localPath: '',
  user: null,
  avatarStyle: {},
  originalAvatarStyle: {},
  container: {}
};

module.exports = Avatar;
