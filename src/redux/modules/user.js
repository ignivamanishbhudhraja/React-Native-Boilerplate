/*
 * @file: user.js
 * @description: User Reducer handles authentication, forgot password, change password apis.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* @flow */

'use strict';

import _ from 'lodash';
import RestClient from '../../utilities/RestClient';
import { ToastActionsCreators } from 'react-native-redux-toast';

// Import required actions Actions
import * as Actions from '../Actions';

// Action Creators
export const setDeviceToken = (data: string) => ({ type: Actions.DEVICE_TOKEN, data });
export const completeWalkthrough = () => ({ type: Actions.COMPLETE_WALKTHROUGH });
export const loginSuccess = (data: ?Object) => ({ type: Actions.LOGIN, data });
export const logout = () => ({ type: Actions.LOGOUT });
export const updateProfile = (data: ?Object) => ({ type: Actions.UPDATE_PROFILE, data });

/**
 * Types checks for reducer.
 */

// Reducer
type Action = {
  type: string,
  data: ?Object
};
type State = {
  userDetails: ?Object,
  newInstall: boolean,
  deviceToken: string
};
type GetState = () => State;
type PromiseAction = Promise<Action>;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;

const initialState: State = {
  userDetails: null,
  newInstall: true,
  deviceToken: 'test'
};

/**
 * API to Upload Files(Images/PDFs) .
 */

export const uploadFiles = (data: any, callBack: Function): ThunkAction => {
  let requestObject = new FormData();
  _.each(data, function(file, i) {
    if (file.isPDF) {
      let pdf = {
        uri: file.path,
        type: 'application/pdf',
        name: 'vehicle.pdf'
      };
      requestObject.append('pdf' + i, pdf);
    } else {
      let photo = {
        uri: file.path,
        type: 'image/jpeg',
        name: 'user photo.png'
      };
      requestObject.append('image' + i, photo);
    }
  });
  return dispatch => {
    RestClient.imageUpload('upload', requestObject)
      .then(result => {
        if (result.success) {
          callBack({
            _id: result.data[0].fileId
          });
        } else {
          dispatch(ToastActionsCreators.displayInfo(result.message));
        }
      })
      .catch(error => {});
  };
};

/**
 * Reducer
 */
export default function reducer(state: any = initialState, action: Action): State {
  // console.log("action.data ===> ", action.data);
  switch (action.type) {
  case Actions.DEVICE_TOKEN:
    return { ...state, deviceToken: action.data };

  case Actions.USER_PROFILE:
    return { ...state, userDetails: action.data };

  case Actions.UPDATE_PROFILE:
    return {
      ...state,
      userDetails: { ...state.userDetails, ...action.data }
    };

  case Actions.NEW_INSTALL:
    return { ...state, newInstall: false };

  case Actions.PENDING_PROFILE_UPDATE:
    return { ...state, isUpdatePending: action.data };

  case Actions.LOGOUT:
    return {
      ...initialState,
      ...{
        newInstall: state.newInstall,
        deviceToken: state.deviceToken
      }
    };

  default:
    return state;
  }
}
