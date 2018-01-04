/* *
 * @file: app.js
 * @description: Application Reducer for handling toasts and spinner.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';
// Import required actions Actions
import { STOP_LOADER,  LOADER_VISIBLITY } from '../Actions';

// Action Creators
export const handleLoader = () => ({ type: LOADER_VISIBLITY });
export const stopLoader   = () => ({ type: STOP_LOADER });

// Reducer
const initialState = {
    isLoading: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        
        case STOP_LOADER:
          return { ...state, isLoading: false };

        case LOADER_VISIBLITY:
        	return { ...state, isLoading: !state.isLoading };

        default:
            return state;
    }
}
