const User = require('../models/User');

class SessionController {

  async login(req, res) {

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(403).json({ msg : 'The password is incorrect'});
    }
    if (user) {
      const checkPassword = await user.checkPassword(password);
      
    }

    console.log(email)
    console.log(password)
    return res.json({ sdfsd: 'sdsdf' });

  }


}

module.exports = new SessionController();