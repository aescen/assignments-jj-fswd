require('dotenv').config();

// -- imports
const express = require('express');
const sequelize = require('./config/dbConnection');
const { HewanModel } = require('./models');
const routerRoutes = require('./routes');

// -- consts
const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;
const app = express();

// -- funcs
const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    next(err);
    return;
  }

  console.error(err);
  res.status(500);
  res.json({
    message: 'Terjadi kegagalan di server kami',
  });
};

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await HewanModel.sync({ alter: true });
    console.log('DB setup done.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use(express.json());
app.use(routerRoutes);
app.use('*', (req, res) => {
  res.status(404);
  res.json({
    message: 'Resource tidak ditemukan.',
  });
});
app.use(errorHandler);

// -- listen
const server = app.listen(PORT, HOST, () => {
  const { address: host, port } = server.address();

  console.log(`Server berjalan di ${host}:${port}`);
});
