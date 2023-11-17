'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _SECONDS = 5000;

const countConnect = () => {
  const numConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numConnections}`);
}

const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    const numCors = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;

    const maxConnections = numCors * 5; // max connections

    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);
    if (numConnection > maxConnections) {
      console.log(`Connection overloaded detected: ${numConnection} connections`);
    }

  }, _SECONDS) // Monitor every 5 seconds
}

module.exports = {
  countConnect,
  checkOverload
}