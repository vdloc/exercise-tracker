const { Exercise } = require('../model/Exercise');
const { User } = require('../model/User');
const { getLocaleDateString, isValidDate } = require('../util/time');

const createExercise = async (req, res) => {
  let { description, duration, date } = req.body;
  const userId = req.params._id;
  const validDate = isValidDate(date) ? new Date(date) : new Date();
  const dateString = getLocaleDateString(validDate);
  const durationNumber = Number(duration);

  try {
    const user = await User.findById(userId);
    const exercise = new Exercise({
      description,
      duration: durationNumber,
      date: validDate,
      username: user.username,
      userId: user._id,
    });
    await exercise.save();
    res.send({
      username: user.username,
      _id: user._id,
      description,
      duration: durationNumber,
      date: dateString,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createExercise,
};
