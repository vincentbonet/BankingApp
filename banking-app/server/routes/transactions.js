const express = require('express');
const router = express.Router();
const db = require('../db');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM transactions WHERE account_id IN (SELECT id FROM accounts WHERE user_id = $1)',
      [req.user.id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', authMiddleware, async (req, res) => {
  const { account_id, amount, description } = req.body;

  try {
    // Start a transaction
    await db.query('BEGIN');

    // Insert the transaction
    const transactionResult = await db.query(
      'INSERT INTO transactions (account_id, amount, description) VALUES ($1, $2, $3) RETURNING *',
      [account_id, amount, description]
    );

    // Update the account balance
    await db.query(
      'UPDATE accounts SET balance = balance + $1 WHERE id = $2 AND user_id = $3',
      [amount, account_id, req.user.id]
    );

    // Commit the transaction
    await db.query('COMMIT');

    res.json(transactionResult.rows[0]);
  } catch (err) {
    await db.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;