const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const { createUser, getAllUsers } = userController;

router.post('/', createUser);
router.get('/', getAllUsers);

module.exports = router;
