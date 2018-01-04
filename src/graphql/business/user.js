/*
 * @file: user.js
 * @description: User mutations & quries.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import gql from 'graphql-tag';

/* Provider Signup */
export const providerSignup = gql`
  mutation createUser($full_name: String!, $password: String!, $confirmPassword: String!,
  $phone_number: String!, $role: String!) {
   	createUser(full_name: $full_name, password: $password, confirmPassword: $confirmPassword,
  		phone_number: $phone_number, role: $role) @connection(key: "createProvider"){
   		full_name
   		phone_number
   		role
   	}
  }
`;