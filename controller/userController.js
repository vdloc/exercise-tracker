const { User } = require('../model/User');

const createUser = async (req, res) => {
  const user = new User({
    username: req.body.username,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
