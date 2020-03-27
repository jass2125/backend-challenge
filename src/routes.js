const { Router } = require('express');

const routes = Router();

require('./database');

routes.get('/', (req, res) => {
  return res.json({ msg: 'msg' })
})

module.exports = routes;