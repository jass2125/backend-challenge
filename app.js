const express = require('express');
const routes = require('./routes');

this.server = express();

this.server.use(express.json());
this.server.use(routes);

module.exports = this.server;