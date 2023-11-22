'use strict';

const StatusCode = {
  SUCCESS: 200,
  CREATED: 201,
}

const ReasonStatusCode = {
  SUCCESS: 'Success',
  CREATED: 'Created success'
}

class SuccessResponse {
  constructor({ message, statusCode = StatusCode.SUCCESS, reasonStatusCode = ReasonStatusCode.SUCCESS, metadata = {} }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata
  }
  send(res, headers = {}) {
    return res.status(this.status).json(this);
  }
}

class Success extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}

class Created extends SuccessResponse {
  constructor({ options = {}, message, statusCode = StatusCode.CREATED, reasonStatusCode = ReasonStatusCode.CREATED, metadata }) {
    super({ message, statusCode, reasonStatusCode, metadata });
    this.options = options;
  }
}


module.exports = {
  Success,
  Created,
  SuccessResponse
}