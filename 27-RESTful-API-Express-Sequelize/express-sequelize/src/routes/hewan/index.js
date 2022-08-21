const express = require('express');

const hewanRoutes = express.Router();
const { hewan } = require('../../controllers');

hewanRoutes.post('/', hewan.addHewan);
hewanRoutes.get('/', hewan.getAllHewans);
hewanRoutes.get('/:id', hewan.getHewanById);
hewanRoutes.put('/:id', hewan.updateHewanById);
hewanRoutes.delete('/:id', hewan.deleteHewanById);

module.exports = hewanRoutes;
