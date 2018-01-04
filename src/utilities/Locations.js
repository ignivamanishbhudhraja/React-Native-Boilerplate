/*
 * @file: Location.js
 * @description: Handle Location Permissions and save location to store.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';
import React, { Component } from "react";
import { Alert, InteractionManager } from "react-native";
import Permissions from 'react-native-permissions';
import Constants from '../constants';
import Geocoder from 'react-native-geocoder';
import * as LocationActions from '../redux/modules/location';

Geocoder.fallbackToGoogle(Constants.GoogleAPIKey);

export function checkPermissions(store) {
  /*Permissions.getPermissionStatus('location', 'whenInUse').then(response => {
    if (response === "authorized") {
      InteractionManager.runAfterInteractions(() => {
        navigator.geolocation.watchPosition(
          (success) => {
            //console.log("success ==> ", success);
            Geocoder.geocodePosition({
              lat: success.coords.latitude,
              lng: success.coords.longitude
            }).then(res => {
              //console.log("Geocoder success==> ", res);
              let position = {
                lat: res[0].position.lat ? res[0].position.lat : null,
                lng: res[0].position.lng ? res[0].position.lng : null,
                address: res[0].formattedAddress ? res[0].formattedAddress : "",
                postalCode: res[0].postalCode ? res[0].postalCode : "",
                city: res[0].locality ? res[0].locality : "",
              }
              store.dispatch(LocationActions.gpsLocation(position));
            }).catch(err => {
              //console.log("Geocoder error==> ", err);
              store.dispatch(LocationActions.gpsLocation(null));
            });
          },
          (error) => {
            //console.log("error==> ", error);
            store.dispatch(LocationActions.gpsLocation(null));
            if (error.code == 2) {
              //errorPopUp("Location Permissions",error.message)
            } else {
              setTimeout(() => {
                errorPopUp("Location Permissions", "We need to access your location. Please go to Settings > Privacy > Location to allow Mobiyle to access your location.");
              }, 700);
            }
          },
          {
            enableHighAccuracy: false,
            timeout: 1000 * 60 * 2,
            maximumAge: 1000 * 60 * 5,
            distanceFilter: 1000
          }
        );
      });
    } else {
      requestPermissions(store);
    }
  });*/
}

export function requestPermissions(store) {
  /*Permissions.requestPermission('location', 'whenInUse').then(response => {
    if (response !== "authorized") {
      setTimeout(() => {
        store.dispatch(LocationActions.gpsLocation(null));
        errorPopUp("Location Permissions", "We need to access your location. Please go to Settings > Privacy > Location to allow Mobiyle to access your location.");
      }, 700);
    } else {
      checkPermissions(store);
    }
  });*/
}

export function errorPopUp(title, msg) {
  Alert.alert(
    title,
    msg,
    [{
      text: "Enable",
      onPress: () => { Permissions.openSettings() }
    }, {
      text: "Cancel",
    }],
    { cancelable: false }
  );
}