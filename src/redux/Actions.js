/*
 * @file: Actions.js
 * @description: All the actions dispatched in application are defined here.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

// App Actions
export const LOADER_VISIBLITY 					= "LOADER_VISIBLITY";
export const STOP_LOADER 								= "STOP_LOADER";

//Locations
export const GPS_LOCATION								= "GPS_LOCATION";
export const SELECTED_LOCATION  				= "SELECTED_LOCATION";
export const LOCATION_DISABLED 					= "LOCATION_DISABLED";
export const DISTANCE_LOCATION 					= "DISTANCE_LOCATION";
export const SET_ADDRESS								= "SET_ADDRESS";

// Navigation Actions
export const GOBACK            					= "GOBACK";
export const ResetNavigator    					= "ResetNavigator";
export const ResetDashboard             = "ResetCustomNavigator";
export const GOTO 											= "GOTO";

// User Actions
export const NEW_INSTALL 								= "NEW_INSTALL";
export const DEVICE_TOKEN 							= "DEVICE_TOKEN";
export const LOGOUT											= "LOGOUT";
export const USER_PROFILE								= "USER_PROFILE";
export const UPDATE_PROFILE							= "UPDATE_PROFILE";
export const PENDING_PROFILE_UPDATE 		= "PENDING_PROFILE_UPDATE";

// Booking Actions
export const SET_BOOKING_DATA 					= "SET_BOOKING_DATA";
export const BOOKING_DATA_IS_SOS 					= "BOOKING_DATA_IS_SOS";
export const IS_SOS_OPENED_AGAIN 					   = "IS_SOS_OPENED_AGAIN";
