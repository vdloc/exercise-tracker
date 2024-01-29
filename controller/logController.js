const { Log } = require('../model/Log');
const { Exercise } = require('../model/Exercise');
const { User } = require('../model/User');

const getAllUserLogs = async (req, res) => {
  try {
    const userId = req.params._id;
    const { limit, from, to } = req.query;

    const users = await User.find({ _id: userId });
    const user = users[0];

    const exercisesQuery = Exercise.find({ userId });

    limit && exercisesQuery.limit(limit);
    from && exercisesQuery.where('date').gte(from);
    to && exercisesQuery.where('date').lte(to);

    const exercises = await exercisesQuery;
    const logs = {
      username: user.username,
      count: exercises.length,
      log: exercises,
    };
    console.log(logs);

    res.send(logs);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = { getAllUserLogs };
