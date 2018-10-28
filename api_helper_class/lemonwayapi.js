/*
  Title: LemonwayAPI
  Author: Jonathan Forrider
  Author Website: http://jfwebdesigns.altervista.org/
  Description: A Class used to build the connection to the Lemonway Payment Processor
  Dependencies: Meteor and http meteor module
*/
import { HTTP } from 'meteor/http'

export default class LemonwayAPI {
  constructor (params) {
    this._url = params.url;
    this._httpMethod = params.httpMethod;  //The URL provided by Lemonway
    this._walletMethod = params.walletMethod; //Specific Controller methods located on Lemonway's servers
    this._postData  = params.postData;
  }

  request (callback) {
    let options = {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      data: this._postData
    }

    if (this._url.substring(this._url.length) !== '/') this._url = this._url+'/';

    HTTP.call(this._httpMethod, this._url + this._walletMethod, options, callback);
  }
}
