
const { Model, Sequelize } = require('sequelize');
const User = require('../models/User');
class Contact extends Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      phone: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'contacts',
    })
    Contact.belongsTo(User, {
      targetKey: 'id',
      foreignKey: 'id_user'
    });
  }

}

module.exports = Contact;