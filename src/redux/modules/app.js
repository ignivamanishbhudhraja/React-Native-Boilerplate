/**
 * @file: app.js
 * @description: Application Reducer for handling toasts and spinner.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

/* @flow */

'use strict';

// Import required actions Actions
import * as Actions from '../Actions';

// Action Creators
export const handleLoader = (type: string): Action => ({ type });

// Reducer
type Action = {
  type: string
};

type State = {
  isLoading: boolean
};

const initialState: State = {
  isLoading: false
};

export default function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
  case Actions.SHOW_LOADER:
    return { ...state, isLoading: true };

  case Actions.HIDE_LOADER:
    return { ...state, isLoading: false };

  default:
    return state;
  }
}
