const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const MoviesModel = mongoose.model('movies', MoviesSchema);

module.exports = MoviesModel;
