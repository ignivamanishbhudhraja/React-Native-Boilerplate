/*
 * @file: PushNotification.js
 * @description: Initiliazing push notification , Redirection on push notifications
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import React, { Component } from "react";
import { Platform } from 'react-native';
import FCM, { FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType } from 'react-native-fcm';
import { mongoid } from 'mongoid-js';
import _ from "lodash";
import Idx from './Idx';
import moment from "moment";
import * as userActions from '../redux/modules/user';
import * as bookingActions from '../redux/modules/bookings';
import { goTo } from '../redux/modules/nav';
let notificationListener, refreshTokenListener;

/*
* Notification Types - 
* Type - 1 // All booking actions
* Type - 2 // Quote accepted by consumer
* Type - 3 // Activate / Deactivate User from Admin Panel.
* Type - 4 // New SOS Request
* Type - 5 // Socket disconnect or manul cancel by consumer
*/

/**
* Initiliazing push notification
*/

export function pushNotificationInit(store) {
	FCM.requestPermissions(); // for iOS
	// FCM token on intial app load.
	FCM.getFCMToken().then(token => {
		console.log("DeviceToken=> ", token)
		if (token) {
			store.dispatch(userActions.setDeviceToken(token));
		}
	});

	// Receive Notification in kill state, inactive state or bankground state.
	FCM.getInitialNotification().then(res => {
		let context = this;
		console.log("getInitialNotification==> ", res);
		if (Idx(res, _ => _.fcm.action)) {
			setTimeout(()=>{ onNotificationRedirection(res, store) }, 500);
		}
	});

	// Receive Notification in forground
	notificationListener = FCM.on(FCMEvent.Notification, async (res) => {
		let context = this;
		console.log("notificationListener==> ", res);
		if (res.notificationType === "2" || res.notificationType === "5" || res.opened_from_tray) {
			setTimeout(function () {
				onNotificationRedirection(res, store);
			}, 500);
		}
	});

	// Fcm token may not be available on first load, catch it here
	refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
		if (token) {
			console.log("refresh", token)
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
		let dashboard = "",
			notification = "ProviderNotifications";

		// Check user role.
		switch (userRole) {
			case "Consumer":
				dashboard = "Dashboard";
				notification = "CustomerNotifications";
				break;
			default:
				dashboard = "ServiceDashboard";
				notification = "ProviderNotifications";
				break;
		}
		// Navigate user based on their role to specific job.
		switch (parseInt(res.notificationType)) {
			case 1: // Takes user to Notifications page.
				if (store.getState().bookings.isSoS == true || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'ActiveService' || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'Invoice' || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === notification) {
					break;
				} else {
					store.dispatch(goTo({
						route: notification
					}));
					break;
				}
				break;

			case 2: // Take user to active booking page.
				if (userRole === "Consumer") {
					break;
				}
				if (store.getState().bookings.isSoS == true || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'ActiveService' || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'Invoice') {
					break;
				} else {
					store.dispatch(bookingActions.setActiveBooking(JSON.parse(res.bookingDetails)));
					store.dispatch(goTo({
						route: 'ActiveService'
					}));
					break;
				}
				break;

			case 5: // . Notification for Manully Cancel or socket disconnected SOS booking to provider (if job is accepted by provider) and take provider to dashboard screen .
				if (userRole === "Consumer") {
					break;
				}
				else if (store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'ActiveService') {
					store.dispatch(bookingActions.setActiveBooking(null));
					store.dispatch(bookingActions.setSoSInBooking(false));
					store.dispatch(goTo({
						route: dashboard
					}));
					break;
				}
			default: //Takes user to dashboard.
				if (store.getState().bookings.isSoS == true || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'ActiveService' || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === 'Invoice' || store.getState().nav.routes[store.getState().nav.routes.length - 1].routeName === dashboard) {
					break;
				} else {
					store.dispatch(goTo({
						route: userRole === "Consumer" ? notification : dashboard
					}));
					break;
				}
				break;
		}
	}
	//Finish Notification
	if (_.isFunction(res.finish)) {
		res.finish();
	};
}

/**
* Stop listening push notification events
*/

export function pushNotificationRemove(store) {
	notificationListener.remove();
	refreshTokenListener.remove();
}
