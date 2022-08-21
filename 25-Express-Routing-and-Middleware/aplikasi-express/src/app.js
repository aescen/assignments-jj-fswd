const express = require('express');
const { hewan } = require('./dummy');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 5000;
const app = express();

const logger = (req, res, next) => {
  console.log('Log:', req.method, req.url);

  next();
};

const speciesChecker = (req, res, next) => {
  const { spesies } = req.body;

  const species = ['kucing', 'anjing', 'kelinci'];

  if (!species.includes(spesies)) {
    res.status(400);
    res.json({
      message: 'Spesies tidak valid',
    });
    return;
  }

  next();
};

app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
  const html = `
    <h1>Aplikasi express: Hewan API</h1>
    <p>More info <a href="https://github.com/aescen/aplikasi-express">here</a></p>
  `;
  res.send(html);
  res.end();
});

app.get('/hewan', (req, res) => {
  res.json(hewan);
});

app.post('/hewan', speciesChecker, (req, res) => {
  const { nama, spesies } = req.body;

  if (!nama || !spesies) {
    res.status(400);
    res.json({
      message: 'Data tidak lengkap',
    });
    return;
  }

  const id = hewan[hewan.length - 1].id + 1;

  hewan.push({
    id,
    nama,
    spesies,
  });

  res.json({
    message: 'Hewan berhasil ditambahkan',
  });
});

app.get('/hewan/:id', (req, res) => {
  const { id } = req.params;

  const theHewan = hewan.find((item) => `${item.id}` === `${id}`);

  if (!theHewan) {
    res.status(404);
    res.json({
      message: 'Hewan tidak ditemukan',
    });
    return;
  }

  res.json({
    hewan: theHewan,
  });
});

app.put('/hewan/:id', (req, res) => {
  const { id } = req.params;
  const { nama, spesies } = req.body;

  if (!nama || !spesies) {
    res.status(400);
    res.json({
      message: 'Data tidak lengkap',
    });
    return;
  }

  const index = hewan.findIndex((item) => `${item.id}` === `${id}`);

  if (index === -1) {
    res.status(404);
    res.json({
      message: 'Hewan tidak ditemukan',
    });
    return;
  }

  hewan[index] = { id: hewan[index].id, nama, spesies };
  const theHewan = hewan.find(
    (item) => item.nama === nama && item.spesies === spesies,
  );

  if (!theHewan) {
    res.status(501);
    res.json({
      message: 'Terjadi kegagalan pada server kami',
    });
    return;
  }

  res.json({
    message: 'Berhasil mengubah data',
  });
});

app.delete('/hewan/:id', (req, res) => {
  const { id } = req.params;

  const index = hewan.findIndex((item) => `${item.id}` === `${id}`);

  if (index === -1) {
    res.status(404);
    res.json({
      message: 'Hewan tidak ditemukan',
    });
    return;
  }

  hewan.splice(index, 1);

  const theHewan = hewan.find((item) => `${item.id}` === `${id}`);

  if (theHewan) {
    res.status(501);
    res.json({
      message: 'Terjadi kesalahan pada server kami',
    });
    return;
  }

  res.json({
    message: 'Berhasil menghapus data',
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server berjalan di ${HOST}:${PORT}`);
});
