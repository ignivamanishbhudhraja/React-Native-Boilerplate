Object.defineProperty(exports, "__esModule", { value: true });
exports.default = configureLinks;
var _apolloLinkContext = require("apollo-link-context");
var _apolloLinkHttp = require("apollo-link-http");
var _apolloLink = require("apollo-link");
var _apolloLinkError = require("apollo-link-error");
var _apolloLinkRetry = require("apollo-link-retry");
var _apolloLinkWs = require("apollo-link-ws");
var _subscriptionsTransportWs = require("subscriptions-transport-ws");
var _reactNativeReduxToast = require("react-native-redux-toast");
var _connection = require("./connection");
var _connection2 = _interopRequireDefault(_connection);
var _user = require("../redux/modules/user");
var userActions = _interopRequireWildcard(_user);
var _app = require("../redux/modules/app");
var loaderActions = _interopRequireWildcard(_app);
var _apolloClientConfig = require("./apolloClientConfig");
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function configureLinks(store) {
  var dispatch = store.dispatch;
  var httpLink = (0, _apolloLinkHttp.createHttpLink)({
    uri: _connection2.default.getBaseUrl() + "gql"
  });
  var wsClient = new _subscriptionsTransportWs.SubscriptionClient(
    _connection2.default.getSocketUrl(),
    {
      reconnect: true,
      lazy: true,
      connectionParams: function connectionParams() {
        return {
          userid: store.getState().user.userDetails
            ? store.getState().user.userDetails.user_id
            : "",
          token: store.getState().user.userDetails
            ? store.getState().user.userDetails.auth.token
            : ""
        };
      }
    }
  );
  wsClient.onConnecting(function() {
    console.log("wsClient onConnecting");
  });
  wsClient.onConnected(function() {
    console.log("wsClient onConnected");
  });
  wsClient.onDisconnected(function() {
    console.log("wsClient onDisconnected");
  });
  var webSocketLink = new _apolloLinkWs.WebSocketLink(wsClient);
  var authLink = (0, _apolloLinkContext.setContext)(function() {
    return {
      headers: {
        userid: store.getState().user.userDetails
          ? store.getState().user.userDetails.user_id
          : "",
        token: store.getState().user.userDetails
          ? store.getState().user.userDetails.auth.token
          : ""
      }
    };
  });
  var middlewareLink = new _apolloLink.ApolloLink(function(operation, forward) {
    return forward(operation).map(function(result) {
      console.log("received result from " + operation.operationName);
      if (operation.operationName === "logOutUser") {
        wsClient.unsubscribeAll();
      }
      return result;
    });
  });
  var errorLink = (0, _apolloLinkError.onError)(function(_ref) {
    var graphQLErrors = _ref.graphQLErrors,
      networkError = _ref.networkError;
    console.log("[Network error]: " + networkError, networkError);
    console.log("[GraphQL error]:", graphQLErrors);
    if (networkError) {
      dispatch(loaderActions.stopLoader());
      if (networkError.statusCode === 503) {
        dispatch(
          _reactNativeReduxToast.ToastActionsCreators.displayInfo(
            "Our servers are not responding. Please try later."
          )
        );
        return;
      }
      dispatch(
        _reactNativeReduxToast.ToastActionsCreators.displayInfo(
          "Please check your internet connectivity."
        )
      );
    } else if (graphQLErrors) {
      showUserFeedback(graphQLErrors);
    }
  });
  var addDatesLink = new _apolloLink.ApolloLink(function(operation, forward) {
    return forward(operation).map(function(response) {
      if (response.data.user.lastLoginDate) {
        response.data.user.lastLoginDate = new Date(
          response.data.user.lastLoginDate
        );
      }
      return response;
    });
  });
  var max = function max(operation) {
    return operation.getContext().max;
  };
  var delay = 5000;
  var interval = function interval(delay, count) {
    if (count > 5) return 10000;
    return delay;
  };
  var retryLink = new _apolloLinkRetry.RetryLink({
    max: max,
    delay: delay,
    interval: interval
  });
  function showUserFeedback(graphQLErrors) {
    dispatch(loaderActions.stopLoader());
    var currentRoute = store.getState().nav.routes[
      store.getState().nav.routes.length - 1
    ].routeName;
    if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0].data) {
      var errorMsg = graphQLErrors[0].data;
      if (errorMsg.statusCode === 401) {
        if (
          errorMsg.reason === "Session Expired" ||
          errorMsg.reason === "Your account has been suspended."
        ) {
          dispatch(userActions.logout());
          dispatch(
            _reactNativeReduxToast.ToastActionsCreators.displayInfo(
              errorMsg.reason
            )
          );
          wsClient.unsubscribeAll();
          setTimeout(function() {
            return (0, _apolloClientConfig.getGraphQlClient)()
              .resetStore()
              .then(function(data) {});
          }, 1500);
        } else if (
          errorMsg.reason === "User not found" &&
          currentRoute !== "Login"
        ) {
          dispatch(
            _reactNativeReduxToast.ToastActionsCreators.displayInfo(
              errorMsg.reason
            )
          );
          dispatch(userActions.logout());
          wsClient.unsubscribeAll();
          setTimeout(function() {
            return (0, _apolloClientConfig.getGraphQlClient)()
              .resetStore()
              .then(function(data) {});
          }, 1500);
        } else if (errorMsg.reason !== "User not found") {
          dispatch(
            _reactNativeReduxToast.ToastActionsCreators.displayInfo(
              errorMsg.reason
            )
          );
        }
      } else {
        dispatch(
          _reactNativeReduxToast.ToastActionsCreators.displayInfo(
            errorMsg.reason
          )
        );
      }
    } else if (graphQLErrors && graphQLErrors.length > 0 && graphQLErrors[0]) {
      dispatch(
        _reactNativeReduxToast.ToastActionsCreators.displayInfo(
          graphQLErrors[0].message
        )
      );
    }
  }
  var hasSubscriptionOperation = function hasSubscriptionOperation(_ref2) {
    var definitions = _ref2.query.definitions;
    return definitions.some(function(_ref3) {
      var kind = _ref3.kind,
        operation = _ref3.operation;
      return kind === "OperationDefinition" && operation === "subscription";
    });
  };
  var apolloLink = _apolloLink.ApolloLink.split(
    hasSubscriptionOperation,
    webSocketLink,
    httpLink
  );
  return (0, _apolloLink.from)([
    middlewareLink,
    errorLink,
    authLink,
    retryLink,
    apolloLink
  ]);
}
