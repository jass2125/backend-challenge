const { Router } = require('express');
require('./database');
const User = require('../src/models/User');

const routes = Router();

routes.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.json(users)
})

module.exports = routes;