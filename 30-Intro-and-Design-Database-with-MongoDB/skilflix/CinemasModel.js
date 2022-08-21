const mongoose = require('mongoose');

const CinemasSchema = new mongoose.Schema({
  cinemaName: {
    type: String,
    required: true,
  },
  location: {
    typeks: String,
    required: true,
  },
  movieList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'movies',
    },
  ],
});

const CinemasModel = mongoose.model('cinemas', CinemasSchema);

module.exports = CinemasModel;
