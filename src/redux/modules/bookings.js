/**
 * @file: bookings.js
 * @description: We're using this to store the data of active booking and clear the data when booking completed.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';

// Import required actions Actions
import { SET_BOOKING_DATA, BOOKING_DATA_IS_SOS, IS_SOS_OPENED_AGAIN, LOGOUT } from '../Actions';

// Action Creators
export const setActiveBooking = data => ({ type: SET_BOOKING_DATA, data });
export const setSoSInBooking = data => ({ type: BOOKING_DATA_IS_SOS, data });
export const setIsSoSInOpenedAgain = data => ({
  type: IS_SOS_OPENED_AGAIN,
  data
});

// Reducer
const initialState = {
  booking: null,
  isSoS: false,
  isSOSOpenedAgain: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKING_DATA:
      return { ...state, booking: { ...state.booking, ...action.data } };

    case BOOKING_DATA_IS_SOS:
      return { ...state, isSoS: action.data };

    case IS_SOS_OPENED_AGAIN:
      return { ...state, isSOSOpenedAgain: action.data };

    case LOGOUT:
      return initialState;

    default:
      return state;
  }
}
