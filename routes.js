const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'msg' })
})

module.exports = routes;