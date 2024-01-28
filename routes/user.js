const express = require('express');
const router = express.Router();
const { User } = require('../schema');

router.post('/', async (req, res) => {
  const { username } = req.body;
  const user = new User({ username });

  await user.save();
  res.send(user);
});

router.get('/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});

module.exports = router;
