/*
 * @file: Linking.js
 * @description: For handle push notification functionality
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import { Linking } from 'react-native';

export function telephone(phoneNumber) {
  Linking.canOpenURL('tel:' + phoneNumber)
    .then(supported => {
      if (!supported) {
        console.log('Cant handle => ' + phoneNumber);
      } else {
        return Linking.openURL('tel:' + phoneNumber);
      }
    })
    .catch(err => console.error('An error occurred', err));
}

export function webpage(url) {
  Linking.canOpenURL(url)
    .then(supported => {
      if (!supported) {
        console.log('Cant handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    })
    .catch(err => console.error('An error occurred', err));
}
