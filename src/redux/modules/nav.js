/**
 * @file: nav.js
 * @description: Navigation reducer to handle navigation.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
'use strict';
import Idx from '../../utilities/Idx';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../config/navigator';
import { REHYDRATE } from 'redux-persist';

// Import required actions Actions
import * as Actions from '../Actions';

// Action Creators
export const goBack = () => ({ type: Actions.GOBACK });
export const reset = data => ({ type: Actions.ResetNavigator, data });
export const resetToDashboard = data => ({
  type: Actions.ResetDashboard,
  data
});
export const goTo = data => ({ type: Actions.GOTO, data });

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'Loader'
      })
    ]
  })
);

export default function reducer(state = initialState, action) {
  let firstState = 'Demo';
  // console.log(action)
  if (action.payload && action.payload.user) {
    firstState = action.payload.user.newInstall ? 'Walkthrough' : 'Login';
    if (action.payload.user.isUpdatePending && action.payload.user.userDetails) {
      switch (action.payload.user.userDetails.role) {
        case 'Consumer':
          firstState = 'CompleteProfile';
          break;
        default:
          firstState = 'CompleteProfileService';
          break;
      }
    } else if (!action.payload.user.isUpdatePending && action.payload.user.userDetails) {
      if (action.payload.user.userDetails.role == 'Consumer') {
        firstState = 'Dashboard';
      } else if (action.payload.user.userDetails.admin_verified == 'accepted') {
        firstState = 'ServiceDashboard';
      } else {
        firstState = 'UnderReview';
      }
    }
  }

  switch (action.type) {
    case Actions.ResetNavigator:
      return AppNavigator.router.getStateForAction(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        }),
        state
      );
    case Actions.ResetDashboard:
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

    case Actions.GOBACK:
      return AppNavigator.router.getStateForAction(NavigationActions.back(), state);

    case REHYDRATE:
      if (
        action.payload.nav &&
        (action.payload.nav.routes[action.payload.nav.routes.length - 1].routeName ===
          'ActiveService' ||
          action.payload.nav.routes[action.payload.nav.routes.length - 1].routeName === 'Invoice')
      ) {
        return AppNavigator.router.getStateForAction(action, state);
      } else {
        return AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: firstState })]
          }),
          state
        );
      }

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
          actions: [NavigationActions.navigate({ routeName: 'Login' })]
        }),
        state
      );

    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
