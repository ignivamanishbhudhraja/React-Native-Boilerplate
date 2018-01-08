/*
 * @file: index.js
 * @description: App's root file to connect apollo provider and redux store with app.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* @flow */
'use strict';

import React from 'react';
import { NetInfo, Platform, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './config/configureStore';
import { checkPermissions } from './utilities/Locations';
import { ApolloProvider } from 'react-apollo';
import configureClient, { getGraphQlClient } from './config/apolloClientConfig';
// import { pushNotificationInit, pushNotificationRemove } from "./utilities/PushNotification";
import Root from './Root';
import Notification from 'react-native-in-app-notification';
import Constants from './constants';
import './utilities/StringEn';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Loader } from './components/common';

/**
 * @function: Configuring redux store.
 * */
const { store, persistor } = configureStore();

/**
 * @function: Configuring graphql client.
 * */
let client = getGraphQlClient();
if (!client) {
  client = configureClient(store);
}

/*
 * Main component
 * */

class Application extends React.Component<{}> {
  notification: ?any;
  constructor(props: Object) {
    super(props);
    /**
     * @function: Initiliazing location utility
     * */
    checkPermissions(store);
  }

  componentDidMount() {
    this.handleNetwork();
    //this.initilizePushNotification();
  }

  componentWillUnmount() {
    //pushNotificationRemove(); // Stop listening push notification events
  }

  /**
   * @function: Initiliazing push notification utility
   * */
  initilizePushNotification = () => {
    if (Platform.OS === 'ios') {
      //pushNotificationInit(store)
    } else {
      //pushNotificationInit(store, this.notification)
    }
  };

  /**
   * @function: Initiliazing network utility.
   * */

  handleNetwork = () => {
    function handleFirstConnectivityChange(isConnected) {
      NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChange);
    }
    NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChange);
    NetInfo.isConnected.fetch().then(isConnected => {});
  };

  onBeforeLift = () => {
    // take some action before the gate lifts
  };

  /**
   * @function: Default render function
   * */
  render() {
    return (
      <View style = {styles.container}>
        <ApolloProvider client = {client}>
          <Provider store = {store}>
            <PersistGate
              loading = {<Loader />}
              onBeforeLift = {this.onBeforeLift}
              persistor = {persistor}
            >
              <Root />
            </PersistGate>
          </Provider>
        </ApolloProvider>
        {Platform.OS !== 'android' && (
          <Notification
            backgroundColour = {Constants.Colors.White}
            ref = {ref => {
              this.notification = ref;
            }}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.White
  }
});

export default Application;
