const mongoose = require('mongoose');
const { Log } = require('../model/Log');
const { Exercise } = require('../model/Exercise');
const { User } = require('../model/User');
const { isValidDate, getLocaleDateString } = require('../util/time');

const getAllUserLogs = async (req, res) => {
  try {
    const userId = req.params._id;
    let { limit, from, to } = req.query;

    const user = await User.findById({ _id: userId });
    let exercisesQuery;

    let query = {
      userId,
    };

    if (isValidDate(from) || isValidDate(to)) {
      query.date = {};
      isValidDate(from) && (query.date['$gte'] = new Date(from));
      isValidDate(to) && (query.date['$lte'] = new Date(to));
    }

    exercisesQuery = Exercise.find(query).lean();
    limit && exercisesQuery.limit(Number(limit));

    const exercises = await exercisesQuery;
    exercises.forEach((exercise) => {
      delete exercise.userId;
      delete exercise.username;
      delete exercise._id;
      delete exercise.__v;
      exercise.date = getLocaleDateString(exercise.date);
    });
    const logs = {
      username: user.username,
      _id: userId,
      count: exercises.length,
      log: exercises,
    };

    res.send(logs);
  } catch (err) {
    res.writeHead(400, 'Custom Status Text', { 'Content-Type': 'text/plain' });

    res.status(400).send(err.toString());
  }
};

module.exports = { getAllUserLogs };
