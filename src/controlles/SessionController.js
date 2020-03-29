const User = require('../models/User');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

class SessionController {

  async login(req, res) {

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(401).json({ msg: 'The email/password is incorrect' });
    }
    
    const checkPassword = await user.checkPassword(password);
    if (!checkPassword) {
      return res.status(401).json({ msg: 'The email/password is incorrect' });
    }

    const token = jwt.sign({id: user.id}, authConfig.secret, {
      expiresIn: authConfig.expiresIn
    });

    res.set({
      'Authorization': 'Bearer ' + token
    });

    return res.json({ sdfsd: 'sdsdf' });

  }


}

module.exports = new SessionController();