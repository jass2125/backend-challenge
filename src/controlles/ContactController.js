
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


  async update(req, res) {
    const { id } = req.params;
    const contact = await Contact.findOne({ where: { id } });
    if (!contact) {
      return res.status(500).json({ msg: 'Contact nont exists' })
    }
    const contactSaved = await Contact.update(req.body, { where: { id } });
    return res.json(contactSaved);
  }

  async store(req, res) {
    const contact = await Contact.create(req.body);
    return res.json(contact);
  }

}

module.exports = new ContactController();