/*
 * @file: navigator.js
 * @description: Configure and connecting react navigation with redux store and routes
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* @flow */

'use strict';

import React from 'react';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import routes from './routes';
import { BackHandler, Alert } from 'react-native';
import PropTypes from 'prop-types';

/**
 * React Navigation's Configuration
 * */
const stackNavigatorConfiguration = {
  headerMode: 'none',
  mode: 'card',
  navigationOptions: {
    gesturesEnabled: false
  }
};

/**
 * @function: Making React navigation's stack navigator with routes and configuration
 * */
const AppNavigator = StackNavigator(routes, stackNavigatorConfiguration);

type Props = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
};

type State = {};

/**
 * @function: Providing dispatch and nav state into app
 * */
class AppWithNavigationState extends React.Component<Props, State> {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.hardwareBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.hardwareBackPress);
  }

  /**
   * @function: On hardware back press popup will appear for applciation exit permission.
   * */
  hardwareBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'OK',
            onPress: () => {
              BackHandler.exitApp();
              return true;
            }
          }
        ],
        { cancelable: false }
      );
      return true;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, nav } = this.props;
    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />;
  }
}

export { AppNavigator };

/**
 * @function: Providing redux store's data in props
 * */

const mapStateToProps = state => ({
  nav: state.nav
});

/**
 * @function: Connects a React component to a Redux store
 * */
export default connect(mapStateToProps)(AppWithNavigationState);
