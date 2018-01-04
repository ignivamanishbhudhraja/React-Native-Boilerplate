/* *
 * @file: Root.js
 * @description: Adding react navigation and other abilities into the app
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  InteractionManager,
  Platform,
  Alert,
  Linking,
  StatusBar
} from 'react-native'
import Navigator from "./config/navigator"
import { Toast } from 'react-native-redux-toast';
import Constants from './constants';
import strings from './utilities/StringEn'
import Progress from './components/common/Progress'

export default class Root extends Component {
  /* *
   * @constructor: Default constructor
   * */
  constructor(props) {
    super(props);
  }

  /* *
   * @function: Default render function
   * */
  render() {
    return (
      <View style={styles.container}>
        {
          Platform.OS === "android" &&
          <StatusBar
            backgroundColor={Constants.Colors.AccentColor}
          />
        }
        <Progress />
        <Navigator />
        <Toast messageStyle={styles.toastStyle} />
      </View>
    )
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

