/**
 * @file: Avatar.js
 * @description: Back Button Module for Navigation Bar.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */

'use strict';

// Import React & React Native Components, JS Libraries, Other Libraries and Modules.

import React, { Component } from 'react';
import {
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import Placeholder from 'rn-placeholder';
import Constants from '../../constants';
import Connection from '../../config/connection';

export default class Avatar extends Component {

  constructor(props) {
    super(props);
    this.avatarName = "";
    this.avatarColor = null;
    this.state = {
      isReady: true
    }
  }

  renderAvatar() {
    let userPlaceholder = null;
    if (this.props.localPath) {
      return (
        <Image
          source={{ uri: this.props.localPath.uri }}
          style={[defaultStyles.avatarStyle, this.props.avatarStyle]}
        />
      );
    }

    if (this.props.user && (this.props.user.photo !== "")) {
      return (
        <Image
          source={{ uri: Connection.getMedia(this.props.user.photo) }}
          style={[defaultStyles.avatarStyle, this.props.avatarStyle, this.props.originalAvatarStyle]}
          onLoadStart={(e) => this.setState({ isReady: true })}

        />
      );
    }

    return (
      <View style={[defaultStyles.container, this.props.container]}>
        <Image
          source={this.props.isCompany ? Constants.Images.plus : Constants.Images.customer}
          style={[defaultStyles.avatarStyle, this.props.avatarStyle]}
        />
      </View>
    );

  }

  renderInitials() {
    const userName = this.props.user.full_name || '';
    const name = userName.toUpperCase().split(' ');
    if (name.length === 1) {
      this.avatarName = `${name[0].charAt(0)}`;
    } else if (name.length > 1) {
      this.avatarName = `${name[0].charAt(0)}${name[1].charAt(0)}`;
    } else {
      this.avatarName = '';
    }
    return (
      <View style={[defaultStyles.avatarStyle, { backgroundColor: Constants.Colors.LightGray }, this.props.avatarStyle]}
      >
        <Text style={[defaultStyles.textStyle, this.props.textStyle,]}>
          {this.avatarName}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderAvatar()}
      </View>
    )
  }
}

const defaultStyles = {
  avatarStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 14,
    height: Constants.BaseStyle.DEVICE_WIDTH / 100 * 14,
  },
  textStyle: {
    color: '#fff',
    backgroundColor: 'transparent',
    ...Constants.Fonts.regular
  },
  container: {
    padding: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 1,
    backgroundColor: Constants.Colors.PrimaryColor
  }
};

Avatar.defaultProps = {
  user: {
    full_name: null,
    photo: null,
  },
  isCompany: false,
  avatarStyle: {},
  textStyle: {},
};

Avatar.propTypes = {
  user: React.PropTypes.object,
  avatarStyle: Image.propTypes.style,
  textStyle: Text.propTypes.style,
};
