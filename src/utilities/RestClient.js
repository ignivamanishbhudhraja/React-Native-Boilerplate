/*
 * @file: RestClient.js
 * @description: Rest Client
 * @date: 04.Jan.2018
 * @author: Manish Budhraja
 * */

"use strict";

import Connection  from "../config/connection";
import querystring from "querystring";
import { NetInfo, Alert, Platform } from "react-native";
import Constants from "../constants";
let logintoken = "";

class RestClient {
    static isConnected() {
        let context = this;
        return new Promise(function(fulfill, reject) {
            NetInfo.isConnected.fetch()
                .then(isConnected => {
                    if (isConnected)
                        fulfill(isConnected);
                    else {
                        reject(isConnected);
                    }
                });

        });
    }

    static getVehicle(params) {
        let context = this;
        return new Promise(function(fulfill, reject) {
            context
                .isConnected()
                .then(() => {
                    let query = querystring.stringify(params);
                    console.log("get vehicle request => ",Connection.getVehicleEndPoint()+ "?" + query);
                    fetch(Connection.getVehicleEndPoint() + "?" + query, {
                            method: "GET",
                            timeout : 1000*1*60,
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        })
                        .then((response) => {
                            return response.text()
                        })
                        .then(responseText => {
                            console.log('responseText*****',responseText);
                            fulfill(JSON.parse(responseText));
                        })
                        .catch(error => {
                            console.warn(error);
                            fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                        });
                })
                .catch(error => {
                    fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                });
        });
    }

    static imageUpload(url, params, token = '',userId='') {
        let context = this,
            logintoken;

        return new Promise(function(fulfill, reject) {
            context.isConnected().then(() => {
                    //console.log("url=> ",Connection.getResturl() + url ," requestObject=> ",params, " x-auth-token => ",token, " x-user-id => ",userId )
                    fetch(Connection.getResturl() + url, {
                            method: "POST",
                            timeout : 1000*1*60,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'multipart/form-data;',
                                "x-auth-token": token,
                                "x-user-id": userId
                            },
                            body: params
                        })
                        .then((response) => {
                            return response.text()
                        })
                        .then(responseText => {
                            //console.log('response ******** ',responseText)
                            fulfill(JSON.parse(responseText));
                        })
                        .catch(error => {
                            console.warn(error);
                            fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                        });
                })
                .catch(error => {
                    fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                });
        });
    }

    static fetchAddressWithPostalCode(postalCode){
        let context = this;
        return new Promise(function(fulfill, reject) {
            context
                .isConnected()
                .then(() => {
                    fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${postalCode}?api_key=${Constants.AddressApiKey}`, {
                            method: "GET",
                            timeout : 1000*1*60,
                            headers: {
                                "Accept": "application/json",
                                "Content-Type": "application/json",
                            }
                        })
                        .then((response) => {
                            return response.text()
                        })
                        .then(responseText => {
                            console.log('responseText*****',responseText);
                            fulfill(JSON.parse(responseText));
                        })
                        .catch(error => {
                            console.warn("error",error);
                            fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                        });
                })
                .catch(error => {
                    console.warn("error",error);
                    fulfill({message:'Please check your internet connectivity or our server is not responding.'});
                });
        });
    }
}

export default RestClient;
