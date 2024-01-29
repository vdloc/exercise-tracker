const express = require('express');
const router = express.Router();
const logController = require('../controller/logController');
const { getAllUserLogs } = logController;

router.get('/:_id/logs', getAllUserLogs);

module.exports = router;
