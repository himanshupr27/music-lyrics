// controllers/contactController.js
const db = require('../config/db');

exports.submitContact = (req, res) => {
  const { name, email, message } = req.body;

  db.query('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message], (err) => {
    if (err) return res.status(500).json({ message: 'Message not sent' });
    res.json({ message: 'Message received successfully' });
  });
};
