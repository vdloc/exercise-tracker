const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('User list');
});

router.get('/:id', (req, res) => {
  res.send(`User ${req.params.id}`);
});

module.exports = router;