/*
 * @file: ApolloClient.js
 * @description:    An ApolloClient instance is the core of the API for Apollo. 
    It contains all of the methods you would need to interact with your GraphQL data, 
    and it is the class you will use no matter which integration you are using.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import ApolloClient from 'apollo-client';
import { createHttpLink, HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { AsyncStorage } from 'react-native';
import { ToastActionsCreators } from 'react-native-redux-toast';
import * as userActions from '../redux/modules/user';
import { IntrospectionFragmentMatcher } from 'react-apollo';
import { ApolloLink, concat } from 'apollo-link';
import link, { httpLink }  from './apolloLinks';
import cache from './apolloCache';

// Apollo Client Object
let graphqlClient = null; 

/**
* @function to setup graphql client & configurations.
*/

export default function configureClient(store) {
    if (!graphqlClient){
        /*
        * @Create apollo client instance.
        */  
        graphqlClient = new ApolloClient({
            link : link(store),
            cache: cache.restore(),
            connectToDevTools: process.env.NODE_ENV !== 'production', // Dev tools will work only in development mode.
            queryDeduplication: true
        });

        window.__APOLLO_CLIENT__ = graphqlClient;
    }
    return graphqlClient;
};

/**
* @function to get graphql client
*/

export const getGraphQlClient = () => graphqlClient;
