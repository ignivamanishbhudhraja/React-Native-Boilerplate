'use strict';
/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */
/* eslint-disable */

const localhost = 'localhost:3000',
  sheenam = '192.168.0.168:3000',
  manish = '192.168.0.31:3000',
  staging = '';

const running_url = process.env.NODE_ENV === 'production' ? staging : manish,
  http_url = `http://${running_url}/`,
  socket_url = `ws://${running_url}/subscriptions`,
  apiBase_url = `http://${running_url}/`,
  staticPagesUrl = `http://${running_url}/`,
  mediaBase_url = `http://${running_url}/store/files/uploads/`,
  vehicleAPI_url = `https://dvlasearch.appspot.com/DvlaSearch`,
  staticPages = `http://konnectweb.ignivastaging.com/`;

export default class Connection {
  static getBaseUrl() {
    return http_url;
  }

  static getResturl() {
    return apiBase_url;
  }

  static getSocketUrl() {
    return socket_url;
  }

  static getMedia(_id) {
    return mediaBase_url + _id;
  }

  static getStaticContent(url) {
    return staticPages + url;
  }
}
