const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  fullname: String,
  name: {
    type: String,
    required: true,
  },
  phone: String,
});

const ProfileModel = mongoose.model('profile', ProfileSchema);

module.exports = ProfileModel;
