const { Sequelize } = require('sequelize'); 
const dbConfig = require('../config/dbconfig');

const User = require('../models/User');
const Contact = require('../models/Contact');

this.connection = new Sequelize(dbConfig);

User.init(this.connection);
Contact.init(this.connection);
