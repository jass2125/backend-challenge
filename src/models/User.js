
const { Model } = require('sequelize');
const { DataTypes } = require('sequelize');

class User extends Model {
  
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING, 
      phone: DataTypes.STRING
    }, {
      sequelize
    })
  }
  
}

module.exports = new User();