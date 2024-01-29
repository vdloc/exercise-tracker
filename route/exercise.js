const express = require('express');
const router = express.Router();
const exerciseController = require('../controller/exerciseController');
const { createExercise } = exerciseController;

router.post('/:_id/exercises', createExercise);

module.exports = router;
