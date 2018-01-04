/* *
 * @file: location.js
 * @description: GPS or user selected location will be kept there.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';
import { handleLoader } from './app';
import RestClient from '../../utilities/RestClient';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Constants from '../../constants';

// Import required actions Actions
import { GPS_LOCATION , SELECTED_LOCATION, SET_ADDRESS } from '../Actions';

// Action Creators
export const gpsLocation        = (data) => ({ type: GPS_LOCATION , data });
export const selectedLocation   = (data) => ({ type: SELECTED_LOCATION , data });
export const setAddress         = (data) => ({ type: SET_ADDRESS, data })

/**
* Fetch list of addresses based on given postal code.
*/

export const fetchLocation = (postalCode) => {
  return dispatch => {
    dispatch(handleLoader());
    RestClient.fetchAddressWithPostalCode(postalCode).then((response) => {
      if(response.code===2000 && response.message=="Success"){
        dispatch(setAddress(response.result));
      }
      dispatch(handleLoader());
    }).catch(error => {
      dispatch(handleLoader());
    });
  }
};


// Reducer
const initialState = {
    gpsLocation: null,
    selectedLocation:null,
    addresses : []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GPS_LOCATION:
          return { ...state, gpsLocation:{ ...state.gpsLocation, ...action.data }};

        case SELECTED_LOCATION:
          return { ...state, selectedLocation:{ ...state.selectedLocation, ...action.data } };

        case SET_ADDRESS:
            return { ...state, addresses: action.data }; 

        default:
            return state;
    }
}
