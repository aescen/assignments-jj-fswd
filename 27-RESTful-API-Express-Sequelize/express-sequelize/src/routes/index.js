const express = require('express');

const routes = express.Router();

const hewanRoutes = require('./hewan');

routes.use('/hewan', hewanRoutes);

routes.get('/', (req, res) => {
  res.json('hewan nih');
});

module.exports = routes;
