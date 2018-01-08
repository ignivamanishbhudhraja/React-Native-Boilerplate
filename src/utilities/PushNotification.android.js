/*
 * @file: PushNotification.js
 * @description: Initiliazing push notification , Redirection on push notifications
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import { AppState } from 'react-native';
import FCM, { FCMEvent } from 'react-native-fcm';
import _ from 'lodash';
import Idx from './Idx';
import * as userActions from '../redux/modules/user';
import Constants from '../constants';
let notificationListener, refreshTokenListener;
let appState = AppState.currentState;

/*
* Notification Types -
*/

/**
 * Initiliazing push notification
 */

export function pushNotificationInit(store, notificationRef) {
  // Listen to the applciation state changes.
  AppState.addEventListener('change', nextAppState => {
    appState = nextAppState;
  });

  FCM.requestPermissions(); // for iOS
  // FCM token on intial app load.
  FCM.getFCMToken().then(token => {
    console.log('DeviceToken=> ', token);
    if (token) {
      store.dispatch(userActions.setDeviceToken(token));
    }
  });

  // Receive Notification in kill state, inactive state or bankground state.
  FCM.getInitialNotification().then(res => {
    console.log('getInitialNotification==> ', res);
    if (Idx(res, _ => _.fcm.action)) {
      setTimeout(() => {
        onNotificationRedirection(res, store);
      }, 500);
    }
  });

  // Receive Notification in forground
  notificationListener = FCM.on(FCMEvent.Notification, async res => {
    console.log('notificationListener==> ', res);
    // If current state is active show local notification.
    if (appState === 'active') {
      notificationRef.show({
        title: res.fcm.title, // Notification Title
        message: res.fcm.body, // Notification Message
        onPress: () => onNotificationRedirection(res, store), // On Press Event.
        icon: Constants.Images.ic_mobiyle_valet_small,
        vibrate: true
      });
    }
    setTimeout(function() {
      onNotificationRedirection(res, store);
    }, 500);
  });

  // Fcm token may not be available on first load, catch it here
  refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
    if (token) {
      console.log('refresh', token);
      store.dispatch(userActions.setDeviceToken(token));
    }
  });
}

/**
 * Redirection on Notification Tap.
 */

export function onNotificationRedirection(res, store) {
  if (Idx(store.getState().user, _ => _.userDetails.auth.token)) {
    let userRole = store.getState().user.userDetails.role;
    let notification = 'Notifications',
      dashboard = ''; // eslint-disable-line no-unused-vars

    // Check user role.
    switch (userRole) {
    case 'Consumer':
      dashboard = 'Dashboard';
      notification = 'CustomerNotifications';
      break;
    default:
      dashboard = 'ServiceDashboard';
      notification = 'ProviderNotifications';
      break;
    }
    // Navigate user based on their role to specific job.
    switch (parseInt(res.notificationType)) {
    case 1: // Takes user to Notifications page.
      break;
    default:
      console.log('notification ', notification, dashboard);
      // Take User to Dashboard.
      break;
    }
  }
  //Finish Notification
  if (_.isFunction(res.finish)) {
    res.finish();
  }
}

/**
 * Stop listening push notification events
 */

export function pushNotificationRemove(store) {
  notificationListener.remove();
  refreshTokenListener.remove();
  // Remove to the applciation state changes listener.
  AppState.removeEventListener('change', nextAppState => {
    appState = nextAppState;
  });
}
