const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

class AuthController {

  async auth(req, res, next) {
    const authorization = req.headers.authorization;
    const [, token] = authorization.split(' ');

    try {
      const check = await jwt.verify(token, authConfig.secret);
      return next();
    } catch (err) {
      return res.status(403).json({ msg: 'Token invalid' });
    }
  }
}

module.exports = new AuthController(); 