/**
 * @file: location.js
 * @description: GPS or user selected location will be kept there.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* @flow */

'use strict';
import { Logger } from '../../utilities';

// Import required actions Actions
import { GPS_LOCATION, SELECTED_LOCATION, SET_ADDRESS } from '../Actions';

// Action Creators
export const gpsLocation = (data: Object): Action => ({ type: GPS_LOCATION, data: data });
export const selectedLocation = (data: Object): Action => ({ type: SELECTED_LOCATION, data: data });
export const setAddress = (data: Object): Action => ({ type: SET_ADDRESS, data: data });

// Reducer
type Action = {
  type: string,
  data: Object
};

type State = {
  gpsLocation: ?Object,
  selectedLocation: ?Object
};

const initialState: State = {
  gpsLocation: null,
  selectedLocation: null
};

export default function reducer(state: any = initialState, action: Action): State {
  Logger.log('location reducer==> ', action.data);
  switch (action.type) {
  case GPS_LOCATION:
    return { ...state, gpsLocation: action.data };

  case SELECTED_LOCATION:
    return { ...state, selectedLocation: action.data };

  case SET_ADDRESS:
    return { ...state, addresses: action.data };

  default:
    return state;
  }
}
