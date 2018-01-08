/*
 * @file: routes.js
 * @description: For defining and importing all screens/routes
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

// Common
import Loader from '../components/common/Loader';
import Demo from '../containers';

// Export application routes.
export default {
  // Common
  Loader: { screen: Loader },
  Demo: { screen: Demo }
};
