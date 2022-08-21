require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { generateAccessToken } = require('./TokenManager');
const { users } = require('./dummy');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    res.json({
      message: 'Gagal login, data tidak lengkap.',
      data: req.body,
    });
    return;
  }

  const userFound = users.find((item) => item.username === username);

  if (!userFound) {
    res.status(400);
    res.json({
      message: 'Gagal login, username atau password salah.',
    });
    return;
  }

  const accessToken = generateAccessToken({
    username: userFound.username,
    role: userFound.role,
  });

  res.json({
    accessToken,
  });
});

const server = app.listen(PORT, HOST, () => {
  const { address: host, port } = server.address();

  console.log(`Server berjalan di ${host}:${port}`);
});
