/**
 * @file: style.js
 * @description: Navigation Style.
 * @date: 04.Jan.2018
 * @author: Manish Budhiraja
 */

/* @flow */

import Constants from '../../constants';
import { Platform } from 'react-native';

const NAV_BAR_CONTAINER = Platform.OS=='ios'?(Constants.BaseStyle.DEVICE_HEIGHT === 812 ? 84 : 64):44;
const NAV_BAR_HEIGHT = Platform.OS=='ios'?NAV_BAR_CONTAINER-20:44;
const STATUS_BAR_HEIGHT = 0;
const MARGIN_TOP = Constants.BaseStyle.DEVICE_HEIGHT === 812? Constants.BaseStyle.DEVICE_HEIGHT / 100 * 4: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2.4;
const MARGIN_HORIZONTAL = Constants.BaseStyle.DEVICE_WIDTH /100  *2;

module.exports = {
  navBarContainer: {
    backgroundColor: Constants.Colors.NavigationColor,
    height: NAV_BAR_CONTAINER,
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 101
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: Constants.Colors.White
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: Constants.BaseStyle.DEVICE_WIDTH / 100 * 101
  },
  customTitle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 7,
    alignItems: 'center'
  },
  navBarButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  navBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: MARGIN_HORIZONTAL,
    marginTop: MARGIN_TOP,
  },
  navBarButtonText: {
    ...Constants.Fonts.content,
    letterSpacing: 0.5
  },
  navBarButtonImage: {
    height : Constants.BaseStyle.DEVICE_WIDTH/100*5,
    width : Constants.BaseStyle.DEVICE_WIDTH/100*5
  },
  navBarTitleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: MARGIN_TOP
  },
  navBarTitleText: {
    color: Constants.Colors.White,
    ...Constants.Fonts.contentBold
  }
};
