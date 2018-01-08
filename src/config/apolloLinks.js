/*
 * @file: apolloLinks.js
 * @description: apollo links
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink, from } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { RetryLink } from 'apollo-link-retry';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { ToastActionsCreators } from 'react-native-redux-toast';
import Connection from './connection';
import * as userActions from '../redux/modules/user';
import * as loaderActions from '../redux/modules/app';
import { getGraphQlClient } from './apolloClientConfig';

/**
 * @function: Configuring and creating redux store
 * */
export default function configureLinks(store) {
  // Get dispatch from store.
  let dispatch = store.dispatch;

  /*
     * @Configure Apollo http link
     */
  const httpLink = createHttpLink({
    uri: Connection.getBaseUrl() + 'gql'
  });

  /**
   * Configure WS Client.
   */

  const wsClient = new SubscriptionClient(Connection.getSocketUrl(), {
    reconnect: true,
    lazy: true,
    connectionParams: () => ({
      userid: store.getState().user.userDetails ? store.getState().user.userDetails.user_id : '',
      token: store.getState().user.userDetails ? store.getState().user.userDetails.auth.token : ''
    })
  });

  wsClient.onConnecting(() => {
    console.log('wsClient onConnecting');
  });

  wsClient.onConnected(() => {
    console.log('wsClient onConnected');
  });

  wsClient.onDisconnected(() => {
    console.log('wsClient onDisconnected');
  });

  /*
    * @ Generate Web Socket Link.
    */
  const webSocketLink = new WebSocketLink(wsClient);

  /*
     * @Configure Apollo link with headers e.g. send user details like token & userid
     */
  const authLink = setContext(() => ({
    headers: {
      userid: store.getState().user.userDetails ? store.getState().user.userDetails.user_id : '',
      token: store.getState().user.userDetails ? store.getState().user.userDetails.auth.token : ''
    }
  }));

  /*
     * @ Middleware Link
     */
  const middlewareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(result => {
      console.log(`received result from ${operation.operationName}`);
      if (operation.operationName === 'logOutUser') {
        wsClient.unsubscribeAll(); // Unsubscribe from all subscriptions.
      }
      return result;
    });
  });

  /*
     * Error response handling.
    */
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(`[Network error]: ${networkError}`, networkError);
    console.log('[GraphQL error]:', graphQLErrors);
    if (networkError) {
      dispatch(loaderActions.stopLoader());
      if (networkError.statusCode === 503) {
        dispatch(
          ToastActionsCreators.displayInfo('Our servers are not responding. Please try later.')
        );
        return;
      }
      dispatch(ToastActionsCreators.displayInfo('Please check your internet connectivity.'));
    } else if (graphQLErrors) {
      showUserFeedback(graphQLErrors);
    }
  });

  /*
    * @ Retry Link Options.
    */
  const max = operation => operation.getContext().max; // Max Number Of Retry Calls.
  const delay = 5000; //a number or function matching (Operation => number) to input to the interval function below: Defaults to 300 ms
  const interval = (delay, count) => {
    if (count > 5) return 10000;
    return delay;
  };

  /*
    * @ Creating Retry Link . Allow multiple attempts when an operation has failed.
    * Retry Link retries on network errors only, not on GraphQL errors.
    * E.g. Try a request while a network connection is offline and retry until it comes back online.
    */
  const retryLink = new RetryLink({
    max,
    delay,
    interval
  });

  /**
   * @function to throw errors.
   */
  function showUserFeedback(graphQLErrors) {
    dispatch(loaderActions.stopLoader());
    let currentRoute = store.getState().nav.routes[store.getState().nav.routes.length - 1]
      .routeName;
    if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0].data) {
      let errorMsg = graphQLErrors[0].data;
      if (errorMsg.statusCode === 401) {
        if (
          errorMsg.reason === 'Session Expired' ||
          errorMsg.reason === 'Your account has been suspended.'
        ) {
          dispatch(userActions.logout());
          dispatch(ToastActionsCreators.displayInfo(errorMsg.reason));
          wsClient.unsubscribeAll(); // Unsubscribe from all subscriptions.
          setTimeout(
            () =>
              getGraphQlClient()
                .resetStore()
                .then(data => {}),
            1500
          );
        } else if (errorMsg.reason === 'User not found' && currentRoute !== 'Login') {
          dispatch(ToastActionsCreators.displayInfo(errorMsg.reason));
          dispatch(userActions.logout());
          wsClient.unsubscribeAll(); // Unsubscribe from all subscriptions.
          setTimeout(
            () =>
              getGraphQlClient()
                .resetStore()
                .then(data => {}),
            1500
          );
        } else if (errorMsg.reason !== 'User not found') {
          dispatch(ToastActionsCreators.displayInfo(errorMsg.reason));
        }
      } else {
        dispatch(ToastActionsCreators.displayInfo(errorMsg.reason));
      }
    } else if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0]) {
      dispatch(ToastActionsCreators.displayInfo(graphQLErrors[0].message));
    }
  }

  // implemented function hasSubscriptionOperation to select link for each operation. NOT PROVIDED BY APOLLO RIGHT NOW.
  const hasSubscriptionOperation = ({ query: { definitions } }) =>
    definitions.some(
      ({ kind, operation }) => kind === 'OperationDefinition' && operation === 'subscription'
    );

  // using ApolloLink.split to select link for each operation.
  const apolloLink = ApolloLink.split(hasSubscriptionOperation, webSocketLink, httpLink);

  return from([middlewareLink, errorLink, authLink, retryLink, apolloLink]);
}
