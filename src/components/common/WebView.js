/**
 * @file: WebView.js
 * @description: WebView to load web pages.
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 */
/* @flow */
"use strict";

import React, { Component } from "react";
import ReactNative, {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Alert,
  WebView,
  ActivityIndicator,
  BackAndroid
} from "react-native";
import NavigationBar from "react-native-navbar";
import Constants from "../../constants";
import BackButton from "./BackButton";
import Connection from "../../config/connection";

/**
 * CLASS BEGINS
 */

class AboutUs extends Component {
  /**
   * Default Constructor
   */
  constructor(props) {
    super(props);
  }

  renderError = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Constants.Colors.White,
          justifyContent: "center"
        }}
      >
        <Text
          style={[
            {
              textAlign: "center",
              marginHorizontal: 15,
              color: Constants.Colors.Black
            },
            Constants.Fonts.subtitle
          ]}
        >
          {Constants.i18n.common.no_internet}
        </Text>
      </View>
    );
  };

  render() {
    let context = this;
    const titleConfig = {
      title: context.props.navigation.state.params.title,
      tintColor: "#fff"
    };
    let { goBack, state } = this.props.navigation;
    return (
      <View style={styles.container}>
        <NavigationBar
          leftButton={<BackButton onPress={() => goBack()} />}
          title={titleConfig}
        />
        <WebView
          renderError={() => context.renderError()}
          onError={() => context.renderError()}
          source={{
            uri: Connection.getStaticPageWithUrl(
              context.props.navigation.state.params.subLink
            )
          }}
        />
      </View>
    );
  }
}

/*
* UI StyleSheet
*/

const styles = StyleSheet.create({
  container: {
    height: Constants.BaseStyle.DEVICE_HEIGHT,
    width: Constants.BaseStyle.DEVICE_WIDTH
  },
  text: {
    color: Constants.Colors.White,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    marginBottom: 10
  }
});

module.exports = AboutUs;
