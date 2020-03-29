const { Model, Sequelize } = require('sequelize');

class User extends Model {

  static init(sequelize){
    super.init({
      email: Sequelize.STRING,
      password_HASH: Sequelize.STRING,
      password: Sequelize.VIRTUAL
    }, {
      sequelize
    })
  }

}

module.exports = User;