// controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  if (!firstName || !email || !phone || !password) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO users (first_name, last_name, emailid, phone_no, password)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      query,
      [firstName, lastName || '', email, phone, hash],
      (err, result) => {
        if (err) {
          console.error('Register Error:', err);
          if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ message: 'Email already exists' });
          }
          return res.status(500).json({ message: 'Server error', error: err.message });
        }

        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  } catch (error) {
    console.error('Hashing Error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};




exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password' });
  }

  const query = 'SELECT * FROM users WHERE emailid = ?';

  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Login Error:', err);
      return res.status(500).json({ message: 'Server error', error: err.message });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.emailid,
        phone: user.phone_no
      }
    });
  });
};
