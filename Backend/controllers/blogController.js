// controllers/blogController.js
const db = require('../config/db');

exports.createBlog = (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;

  db.query('INSERT INTO blogs (title, content, user_id) VALUES (?, ?, ?)', [title, content, userId], (err) => {
    if (err) return res.status(500).json({ message: 'Blog not created' });
    res.json({ message: 'Blog created successfully' });
  });
};

exports.getBlogs = (req, res) => {
  db.query('SELECT blogs.*, users.username FROM blogs JOIN users ON blogs.user_id = users.id', (err, results) => {
    if (err) return res.status(500).json({ message: 'Failed to fetch blogs' });
    res.json(results);
  });
};
