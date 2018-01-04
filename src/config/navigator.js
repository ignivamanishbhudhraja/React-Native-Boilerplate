/*
 * @file: navigator.js
 * @description: Configure and connecting react navigation with redux store and routes
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import routes from './routes';
import { BackHandler, Alert } from 'react-native';

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

/**
 * @function: Providing dispatch and nav state into app
 * */
class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      Alert.alert(
        'Exit App',
        'Are you sure you want to exit?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
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
