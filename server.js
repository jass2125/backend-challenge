const express = require('express');

const server = express();

server.get('/', (req, res) => {
  return res.json({msg : 'msg'})
})
server.listen(3000);