/**
 * @file: Root.js
 * @description: Adding react navigation and other abilities into the app
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  InteractionManager,
  Platform,
  Alert,
  Linking,
  StatusBar
} from "react-native";
import Navigator from "./config/navigator";
import { Toast } from "react-native-redux-toast";
import Constants from "./constants";
import { Progress } from "./components/common";

export default class Root extends React.Component<{}> {
  /**
   * @constructor: Default constructor
   * */
  constructor(props: Object) {
    super(props);
  }

  check = (i: number): void => {
    return;
  };

  /**
   * @function: Default render function
   * */
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "android" && (
          <StatusBar backgroundColor={Constants.Colors.AccentColor} />
        )}
        <Progress />
        <Navigator />
        <Toast messageStyle={styles.toastStyle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  },
  toastStyle: {
    color: Constants.Colors.White,
    ...Constants.Fonts.normal
  }
});
