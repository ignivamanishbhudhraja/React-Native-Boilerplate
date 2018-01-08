/*
 * @file: Logger.js
 * @description: Handle Location Permissions and save location to store.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

// import Logger from 'bunyan';

// // create a logger instance
// export default new Logger({
//   name: 'ReactNativeBoilerplate',
//   level: 'debug',
//   serializers: Logger.stdSerializers
// });

export default class Logger {
  static log(origin, info) {
    console.log(origin, info);
  }
  static debug(origin, info) {
    console.debug(origin, info);
  }
  static error(origin, info) {
    console.error(origin, info);
  }
  static warn(origin, info) {
    console.warn(origin, info);
  }
}
