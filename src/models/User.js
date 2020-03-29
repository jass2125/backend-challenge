const { Model, Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs');

class User extends Model {

  static init(sequelize) {
    super.init({
      email: Sequelize.STRING,
      password_hash: Sequelize.STRING,
      password: Sequelize.VIRTUAL
    }, {
      sequelize,
      tableName: 'users'
    })
  }

  async checkPassword(password) {
    if (password) {
      console.log(password);
      
      return await bcrypt.compare(password, this.password_hash);
    }
  }

}

module.exports = User;