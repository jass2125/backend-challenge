const { Router } = require('express');
const Contact = require('./models/Contact');

require('./database');

const routes = Router();

routes.get('/contacts', async (req, res) => {
  const contacts = await Contact.findAll();
  return res.json(contacts)
})

// routes.post('/contacts', async (req, res) => {
//   const contacts = await Contact.create({contact: req.body});
//   return res.json(contacts)
// })

// routes.put('/contacts', async (req, res) => {
//   const contacts = await Contact.create({contact: req.body})
//   return res.json(contacts)
// })

// routes.delete('/contacts', async (req, res) => {

//   const contacts = await Contact.delete({where : { id : req.query}})
//   return res.json(contacts)
// })

module.exports = routes;