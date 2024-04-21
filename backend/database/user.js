const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/practice');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
