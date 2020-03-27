const { Sequelize } = require('sequelize'); 
const dbConfig = require('../config/dbconfig');
const Contact = require('../models/Contact');

this.connection = new Sequelize(dbConfig);

Contact.init(this.connection);
