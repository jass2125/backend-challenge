
const Contact = require('../models/Contact');
const User = require('../models/User');

class ContactController {

  async findAll(req, res) {
    const contacts = await Contact.findAll({ where: { id_user: req.id }, include: [{ model: User }] });
    return res.json(contacts);
  }

  async delete(req, res) {
    const { id } = req.params;
    const contact = await Contact.destroy({ where: { id, id_user: req.id } });
    return res.json(contact);
  }

  async update(req, res) {
    const { id } = req.params;
    const contact = await Contact.findOne({ where: { id } });

    if (!contact) {
      return res.status(500).json({ msg: 'Contact nont exists' })
    }
    req.body.user = {
      id: req.id
    }
    const con = req.body;
    con.id_user = req.id

    const contactSaved = await Contact.update(con, {
      where: { id }
    }
    );
    return res.json(contactSaved);
  }

  async store(req, res) {
    const cont = req.body;
    cont.id_user = req.id;
    const contact = await Contact.create(cont);
    return res.json(contact);
  }

}

module.exports = new ContactController();