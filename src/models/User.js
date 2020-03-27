
const { Model, Sequelize } = require('sequelize');

class User extends Model {
  
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING, 
      phone: Sequelize.STRING
    }, {
      sequelize,
      tableName: 'users'
    })
  }
  
}

module.exports = User;