/**
 * @file: nav.js
 * @description: Navigation reducer to handle navigation.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../config/navigator';
import { REHYDRATE } from 'redux-persist';

// Import required actions Actions
import * as Actions from '../Actions';

// Action Creators
export const goBack = () => ({ type: Actions.GOBACK });
export const reset = data => ({ type: Actions.Reset, data });
export const goTo = data => ({ type: Actions.GOTO, data });

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'ScreenOne'
      })
    ]
  })
);

export default function reducer(state = initialState, action) {
  let firstState = 'ScreenOne';

  switch (action.type) {
  case Actions.Reset:
    return AppNavigator.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({
            routeName: action.data.route,
            params: action.data.data ? action.data.data : {}
          })
        ]
      }),
      state
    );

  case Actions.GOTO:
    return AppNavigator.router.getStateForAction(
      NavigationActions.navigate({
        routeName: action.data.route,
        params: action.data.params || {}
      }),
      state
    );

  case Actions.LOGOUT:
    return AppNavigator.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'ScreenOne' })]
      }),
      state
    );

  case Actions.GOBACK:
    return AppNavigator.router.getStateForAction(NavigationActions.back(), state);

  case REHYDRATE:
    return AppNavigator.router.getStateForAction(
      NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: firstState })]
      }),
      state
    );

  default:
    return AppNavigator.router.getStateForAction(action, state);
  }
}
