/*
 * @file: user.js
 * @description: User mutations & quries.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */ 

import gql from 'graphql-tag';

/* Customer Signup */
export const customerSignup = gql`
  mutation createUser($full_name: String!, $password: String!, $confirmPassword: String!,
  $phone_number: String!, $role: String!) {
   	createUser(full_name: $full_name, password: $password, confirmPassword: $confirmPassword,
  		phone_number: $phone_number, role: $role) @connection(key: "createConsumer"){
   		full_name
   		phone_number
      role
      ...on Consumer {
        settings {
          notifications
          radius
        }
      } 
   	}
  }
`;
