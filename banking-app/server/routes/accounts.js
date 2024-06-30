const express = require('express');
const router = express.Router();
const db = require('../db');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM accounts WHERE user_id = $1', [req.user.id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { account_name, balance } = req.body;

  try {
    const result = await db.query(
      'INSERT INTO accounts (user_id, account_name, balance) VALUES ($1, $2, $3) RETURNING *',
      [req.user.id, account_name, balance]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;