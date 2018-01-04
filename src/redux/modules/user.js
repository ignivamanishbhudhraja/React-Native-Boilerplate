/*
 * @file: user.js
 * @description: User Reducer handles authentication, forgot password, change password apis.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import {
  Platform,
} from 'react-native';
import _ from "lodash";
import { handleLoader } from './app';
import { goBack, reset } from './nav';
import RestClient from '../../utilities/RestClient';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Constants from '../../constants';

// Import required actions Actions
import * as Actions from '../Actions';

// Action Creators
export const setDeviceToken = (data) => ({ type: Actions.DEVICE_TOKEN, data });
export const setUserData = (data) => ({ type: Actions.USER_PROFILE, data });
export const updateProfile = (data) => ({ type: Actions.UPDATE_PROFILE, data });
export const logout = () => ({ type: Actions.LOGOUT });
export const newInstall = () => ({ type: Actions.NEW_INSTALL });
export const pendingProfile = (data) => ({ type: Actions.PENDING_PROFILE_UPDATE, data });

/**
* API to Upload Files(Images/PDFs) .
*/
export const uploadFiles = (data, callBack) => {
  let requestObject = new FormData();
  _.each(data, function (file, i) {
    if (file.isPDF) {
      let pdf = {
        uri: file.path,
        type: "application/pdf",
        name: "vehicle.pdf",
      };
      requestObject.append("pdf" + i, pdf);
    } else {
      let photo = {
        uri: file.path,
        type: "image/jpeg",
        name: "user photo.png",
      };
      requestObject.append("image" + i, photo);
    }
  });
  return dispatch => {
    dispatch(handleLoader());
    RestClient.imageUpload("upload", requestObject).then((result) => {
      if (result.success) {
        callBack({
          _id: result.data[0].fileId
        });
      } else {
        dispatch(ToastActionsCreators.displayInfo(result.message));
      }
      dispatch(handleLoader());
    }).catch(error => {
      dispatch(handleLoader());
    });
  }
};

/**
* Fetch Vehicle Details from third party api services.
*/
export const getVehicleDetails = (data, callBack) => {
  return dispatch => {
    dispatch(handleLoader());
    let requestObject = {
      apikey: Constants.VehicleAPIKey,
      licencePlate: data
    };
    RestClient.getVehicle(requestObject).then((result) => {
      if (result.error !== 1 && result.message != "No vehicle found") {
        callBack(result);
      }
      dispatch(ToastActionsCreators.displayInfo(result.message));
      dispatch(handleLoader());
    }).catch(error => {
      dispatch(handleLoader());
    });
  }
};


/**
* Initial state
*/
const initialState = {
  userDetails: null,
  deviceToken: "test",
  reviews: [],
  newInstall: true,
  isUpdatePending: false
};

/**
* Reducer
*/
export default function reducer(state = initialState, action) {
  // console.log("action.data ===> ", action.data);
  switch (action.type) {
    case Actions.DEVICE_TOKEN:
      return { ...state, deviceToken: action.data };

    case Actions.USER_PROFILE:
      return { ...state, userDetails: action.data };

    case Actions.UPDATE_PROFILE:
      return { ...state, userDetails: { ...state.userDetails, ...action.data } };

    case Actions.NEW_INSTALL:
      return { ...state, newInstall: false }

    case Actions.PENDING_PROFILE_UPDATE:
      return { ...state, isUpdatePending: action.data }

    case Actions.LOGOUT:
      let data = {
        ...initialState, ...{
          newInstall: state.newInstall,
          deviceToken: state.deviceToken
        }
      };
      console.log("MY DAT ", data)
      return data;

    default:
      return state;
  }
}
