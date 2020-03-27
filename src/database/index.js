const { Sequelize } = require('sequelize'); 
const dbConfig = require('../config/dbconfig');
const User = require('../models/User');

this.connection = new Sequelize(dbConfig);

User.init(this.connection);
