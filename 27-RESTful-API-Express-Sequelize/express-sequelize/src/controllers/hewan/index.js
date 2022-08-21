const { HewanModel } = require('../../models');

module.exports = {
  addHewan: async (req, res) => {
    const { nama, namaSpesies, umur } = req.body;

    const hewanFound = await HewanModel.findOne({
      where: {
        nama,
      },
    });

    if (hewanFound !== null) {
      res.status(400);
      res.json({
        message: 'Hewan sudah ada.',
      });
      return;
    }

    await HewanModel.create({
      nama,
      namaSpesies,
      umur,
    });

    res.status(201);
    res.json({
      message: 'Berhasil menambah hewan baru.',
    });
  },
  getAllHewans: async (req, res) => {
    const hewans = await HewanModel.findAll();
    res.json(hewans);
  },
  getHewanById: async (req, res) => {
    const { id: hewanId } = req.params;
    const hewanFound = await HewanModel.findOne({
      where: {
        id: hewanId,
      },
    });

    if (hewanFound === null) {
      res.status(404);
      res.json({
        message: 'Hewan tidak ada.',
      });
      return;
    }

    res.json(hewanFound);
  },
  updateHewanById: async (req, res) => {
    const { id: hewanId } = req.params;
    const { nama, namaSpesies, umur } = req.body;

    const updatedHewanRow = await HewanModel.update(
      {
        nama,
        namaSpesies,
        umur,
      },
      {
        where: {
          id: hewanId,
        },
      },
    );

    if (updatedHewanRow[0] === 0) {
      res.status(404);
      res.json({
        message: 'Hewan tidak ada.',
      });
      return;
    }

    res.json({
      message: 'Berhasil merubah data hewan.',
    });
  },
  deleteHewanById: async (req, res) => {
    const { id: hewanId } = req.params;
    const deletedHewanRow = await HewanModel.destroy({
      where: {
        id: hewanId,
      },
    });

    if (!deletedHewanRow) {
      res.status(404);
      res.json({
        message: 'Hewan tidak ada.',
      });
      return;
    }

    res.json({
      message: 'Berhasil menghapus data hewan.',
    });
  },
};
