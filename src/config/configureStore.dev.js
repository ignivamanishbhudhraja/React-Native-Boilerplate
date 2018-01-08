/*
 * @file: configureStore.js
 * @description: configure redux store
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import { compose, applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import { Platform } from 'react-native';
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from '../redux';

/**
 * @function: Configuring and creating redux store
 * */
export default function configureStore() {
  /**
   * @function: Creating redux store
   * */
  const store = createStore(
    reducer(),
    compose(
      devToolsEnhancer({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
      })
    ),
    applyMiddleware(thunk)
  );

  /**
   * @function: Persisting store for save all store's data except blacklisted reducers in device's memory
   * */
  let persistor = persistStore(store);

  /**
   * @return: returning store and storage persistor when it's successfully created
   * */
  return { persistor, store };
}
