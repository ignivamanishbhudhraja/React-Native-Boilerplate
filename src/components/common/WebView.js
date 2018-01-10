/**
 * @file: WebView.js
 * @description: Web view component for showing static context outside the application.
 * @date: 10.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

'use strict';

import React from 'react';
import { WebView as DefaultWebView, StyleSheet } from 'react-native';
import Constants from '../../constants';
import Connection from '../../config/connection';

type Props = {
  endpoint?: string,
  style: WebView.propTypes.style,
};

const WebView = (props: Props) => {
  const { endpoint, style } = props;
  return(
    <DefaultWebView
      source = {{uri: Connection.getStaticContent(endpoint)}}
      style = {[styles.container, style]}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height:Constants.BaseStyle.DEVICE_HEIGHT,
    width:Constants.BaseStyle.DEVICE_WIDTH,
    flex: 1
  }
});

WebView.defaultProps = {
  style: {},
};

export default WebView;