const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    // unique: true
  },
});

module.exports = mongoose.model('Feed', feedSchema);
