/*
 * @file: index.js
 * @description: combine all reducers
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import { AsyncStorage, Platform } from 'react-native';
import { REHYDRATE, PURGE, persistCombineReducers } from 'redux-persist';
import { toastReducer as toast } from 'react-native-redux-toast';
import { combineReducers } from 'redux';
import app from './modules/app';
import nav from './modules/nav';
import user from './modules/user';
import location from './modules/location';
import bookings from './modules/bookings';

const config = {
  key: 'primary',
  storage: AsyncStorage
};

export default function getRootReducer() {
  return persistCombineReducers(config, {
    toast,
    app,
    nav,
    user,
    location,
    bookings
  });
}
