/*
 * @file: configureStore.js
 * @description: configure redux store
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

if (process.env.NODE_ENV !== 'production') {
  module.exports = require('./configureStore.dev');
} else {
  module.exports = require('./configureStore.prod');
}
