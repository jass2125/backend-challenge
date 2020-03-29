const { Router } = require('express');
const SessionController = require('./controlles/SessionController');
const ContactController = require('./controlles/ContactController');
const AuthController = require('./controlles/AuthController');

require('./database');

const routes = Router();

routes.post('/login', SessionController.login);

routes.use(AuthController.auth);

routes.get('/contacts', ContactController.findAll);
routes.delete('/contacts/:id', ContactController.delete);
routes.put('/contacts/:id', ContactController.update);
routes.post('/contacts', ContactController.store);

module.exports = routes;