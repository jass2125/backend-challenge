
const Contact = require('../models/Contact');
const User = require('../models/User');

class ContactController {

  async findAll(req, res) {
    const contacts = await Contact.findAll({ include: [{ model: User }] });
    return res.json(contacts);
  }

  async delete(req, res) {
    const { id } = req.params
    const contact = await Contact.destroy({ where: { id } });
    return res.json(contact);
  }

  
  // async findAll(req, res) {
  //   const contacts = await Contact.findAll({ include: [{ model: User }] });
  //   return res.json(contacts);
  // }

  // async findAll(req, res) {
  //   const contacts = await Contact.findAll({ include: [{ model: User }] });
  //   return res.json(contacts);
  // }

}

module.exports = new ContactController();