const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
  username: String,
  description: String,
  duration: Number,
  date: String,
  userId: String,
});
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = {
  Exercise,
};
