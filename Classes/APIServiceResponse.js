class ServiceResponse {
  
    constructor() {
      this._status = true;
      this._statusCode = -1;
      this._message = '';
      this._data = [];
    }
  
    get status() {
      return this._status;
    }
    get statusCode() {
      return this._statusCode;
    }
    get message() {
      return this._message;
    }
    get data() {
      return this._data;
    }
  
    set status(inStatus) {
      this._status = inStatus;
    }
    set statusCode(inStatusCode) {
      this._statusCode = inStatusCode;
    }
    set message(inMessage) {
      this._message = inMessage;
    }
    set data(inData) {
      this._data = inData;
    }
  }
  
  module.exports = ServiceResponse;
