
const { Model, Sequelize } = require('sequelize');

class Contact extends Model {

  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      phone: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'contacts'
    })
  }

}

module.exports = Contact;