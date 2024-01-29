const { Exercise } = require('../model/Exercise');
const { User } = require('../model/User');
const { getLocaleDateString } = require('../util/time');

const createExercise = async (req, res) => {
  const { description, duration, date } = req.body;
  const userId = req.params._id;

  const validDate =
    new Date(date) !== 'Invalid Date' ? new Date(date) : new Date();
  const dateString = getLocaleDateString(validDate);
  console.log(dateString);

  try {
    const user = await User.findById(userId);
    const exercise = new Exercise({
      description,
      duration,
      date: dateString,
      username: user.username,
      userId: user._id,
    });
    await exercise.save();
    res.send({
      username: user.username,
      _id: user._id,
      description,
      duration,
      date: dateString,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createExercise,
};
