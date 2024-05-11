const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // You can add more fields here like name, age, etc.
}, { timestamps: true });

// Create User model
const User = mongoose.model('User', userSchema);

module.exports = User;
