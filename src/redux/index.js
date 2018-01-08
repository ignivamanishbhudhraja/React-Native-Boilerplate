/*
 * @file: index.js
 * @description: combine all reducers
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import { AsyncStorage } from 'react-native';
import { persistCombineReducers } from 'redux-persist';
import { toastReducer as toast } from 'react-native-redux-toast';
import app from './modules/app';
import nav from './modules/nav';
import user from './modules/user';
import location from './modules/location';

const config = {
  key: 'primary',
  storage: AsyncStorage,
  blacklist: [app, nav, location]
};

export default function getRootReducer() {
  return persistCombineReducers(config, {
    toast,
    app,
    nav,
    user,
    location
  });
}
