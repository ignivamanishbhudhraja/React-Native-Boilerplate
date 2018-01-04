/*
 * @file: common.js
 * @description: Common mutations & quries.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

import gql from 'graphql-tag';

/* Login Mutation */
export const loginUser = gql`
mutation loginUser($phone_number: String!, $password: String!, $device_info:deviceInfoInput) {
    loginUser(phone_number: $phone_number, password : $password, device_info:$device_info) @connection(key: "loginUser"){
        auth{
            token
        }
        active
    }
}
`;

/* Logout Mutation */
export const logOUt = gql`
mutation logOutUser($role: String!) {
    logOutUser(role: $role) @connection(key: "logOutUser"){
        success
        message
        statusCode
    }
}
`;
