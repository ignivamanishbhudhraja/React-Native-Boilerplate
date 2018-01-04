/*
 * @file: Loader.js
 * @description: Top header component for showing statusbar, back button, title etc
 * @date: 18.09.2017
 * @author: Manish Budhiraja
 * */
/* @flow */
import React, { Component } from "react";
import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  componentDidMount() {
    let context = this;
    setTimeout(function() {
      context.setState({ visible: false });
    }, 1000);
  }

  render() {
    return <Spinner visible={this.state.visible} />;
  }
}

module.exports = Loader;
