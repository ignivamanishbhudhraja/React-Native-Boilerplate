/*
 * @file: RestClient.js
 * @description: Rest Client class for defining methods used for calling apis.
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

'use strict';

import Connection from '../config/connection';
import querystring from 'querystring';
import { NetInfo } from 'react-native';
import Constants from '../constants';

class RestClient {
  static isConnected() {
    return new Promise(function(resolve, reject) {
      NetInfo.isConnected.fetch().then(isConnected => {
        if (isConnected) resolve(isConnected);
        else {
          reject(isConnected);
        }
      });
    });
  }

  /*
  * @function : Method to call POST api.
  * @args accepted : endpoint, params, token, userId
  */

  static post(endpoint, params, token = '', userId = '') {
    let context = this;
    return new Promise(function(resolve, reject) {
      context
        .isConnected()
        .then(() => {
          console.log(
            'endpoint=> ',
            Connection.getResturl() + endpoint,
            ' requestObject=> ',
            params,
            ' x-auth-token => ',
            token,
            ' x-user-id => ',
            userId
          );
          fetch(Connection.getResturl() + endpoint, {
            method: 'POST',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token,
              'x-user-id': userId
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              //console.log('responseText*****',responseText);
              resolve(JSON.parse(responseText));
            })
            .catch(error => {
              resolve({ message: Constants.i18n.networkError });
              console.warn('eroro', error);
            });
        })
        .catch(error => {
          resolve({ message: Constants.i18n.networkError });
        });
    });
  }

  /*
  * @function : Method to call PUT api.
  * @args accepted : endpoint, params, token, userId
  */
  static put(endpoint, params, token = '', userId = '') {
    let context = this;
    return new Promise(function(resolve, reject) {
      context
        .isConnected()
        .then(() => {
          // console.log("endpoint=> ",Connection.getResturl() + endpoint ," requestObject=> ",params, " x-auth-token => ",token, " x-user-id => ",userId )
          fetch(Connection.getResturl() + endpoint, {
            method: 'PUT',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token,
              'x-user-id': userId
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              //console.log('responseText*****',responseText);
              resolve(JSON.parse(responseText));
            })
            .catch(error => {
              console.warn(error);
              resolve({ message: Constants.i18n.networkError });
            });
        })
        .catch(error => {
          resolve({ message: Constants.i18n.networkError });
        });
    });
  }

  /*
  * @function : Method to call DELETE api.
  * @args accepted : endpoint, params, token, userId
  */
  static delete(endpoint, params, token = '', userId = '') {
    let context = this;
    return new Promise(function(resolve, reject) {
      context
        .isConnected()
        .then(() => {
          //console.log("endpoint=> ",Connection.getResturl() + endpoint ," requestObject=> ",params, " x-auth-token => ",token, " x-user-id => ",userId )
          fetch(Connection.getResturl() + endpoint, {
            method: 'DELETE',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token,
              'x-user-id': userId
            },
            body: JSON.stringify(params)
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              //console.log('responseText*****',responseText);
              resolve(JSON.parse(responseText));
            })
            .catch(error => {
              resolve({ message: Constants.i18n.networkError });
              console.warn(error);
            });
        })
        .catch(error => {
          resolve({ message: Constants.i18n.networkError });
        });
    });
  }

  /*
  * @function : Method to GET/FETCH data from server.
  * @args accepted : endpoint, params, token, userId
  */

  static get(endpoint, params, token = '', userId = '') {
    let context = this;
    return new Promise(function(resolve, reject) {
      context
        .isConnected()
        .then(() => {
          // console.log("endpoint=> ",Connection.getResturl() + endpoint ," requestObject=> ",params, " x-auth-token => ",token, " x-user-id => ",userId )
          let query = querystring.stringify(params);
          fetch(Connection.getResturl() + endpoint + '?' + query, {
            method: 'GET',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-auth-token': token,
              'x-user-id': userId
            }
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              //console.log('responseText*****',responseText);
              resolve(JSON.parse(responseText));
            })
            .catch(error => {
              console.warn(error);
              resolve({ message: Constants.i18n.networkError });
            });
        })
        .catch(error => {
          resolve({ message: Constants.i18n.networkError });
        });
    });
  }

  /*
  * @function : Method to upload files with multipart form data method.
  * @args accepted : endpoint, params, token, userId
  */
  static imageUpload(endpoint, params, token = '', userId = '') {
    let context = this;
    return new Promise(function(resolve, reject) {
      context
        .isConnected()
        .then(() => {
          //console.log("endpoint=> ",Connection.getResturl() + endpoint ," requestObject=> ",params, " x-auth-token => ",token, " x-user-id => ",userId )
          fetch(Connection.getResturl() + endpoint, {
            method: 'POST',
            timeout: 1000 * 1 * 60,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data;',
              'x-auth-token': token,
              'x-user-id': userId
            },
            body: params
          })
            .then(response => {
              return response.text();
            })
            .then(responseText => {
              //console.log('response ******** ',responseText)
              resolve(JSON.parse(responseText));
            })
            .catch(error => {
              console.warn(error);
              resolve({
                message: Constants.i18n.networkError
              });
            });
        })
        .catch(error => {
          resolve({
            message: Constants.i18n.networkError
          });
        });
    });
  }
}

export default RestClient;
