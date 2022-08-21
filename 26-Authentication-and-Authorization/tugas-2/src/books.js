require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const { verifyAccessToken } = require('./TokenManager');
const { books } = require('./dummy');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.json());
const authenticateJWT = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400);
    res.json({
      message: 'Gagal memuat data. Token tidak ada',
    });
    return;
  }

  const decoded = verifyAccessToken(authorization);

  if (decoded) {
    req.user = decoded;
    next();
    return;
  }

  res.status(401);
  res.json({
    message: 'Gagal memuat data. Token anda tidak valid.',
  });
};

app.get('/books', authenticateJWT, (req, res) => {
  res.json(books);
});

app.post('/books', authenticateJWT, (req, res) => {
  const { role } = req.user;
  if (role === 'admin') {
    const {
      author, country, language, pages, title, year,
    } = req.body;
    if (!author || !country || !language || !pages || !title || !year) {
      res.status(400);
      res.json({
        message: 'Data tidak lengkap',
      });
      return;
    }

    books.push({
      author,
      country,
      language,
      pages,
      title,
      year,
    });

    res.json('book added successfully');
  }

  res.status(403);
  res.json({
    message: 'Gagal menambah buku. Anda tidak memiliki akses.',
  });
});

const server = app.listen(PORT, HOST, () => {
  const { address: host, port } = server.address();

  console.log(`Server berjalan di ${host}:${port}`);
});
