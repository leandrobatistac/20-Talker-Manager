const { Router } = require('express');

const talkerRoute = Router();
const path = require('path');
const readJson = require('../utils/readJson');

const talkerPath = path.resolve(__dirname, '../talker.json');

talkerRoute.get('/', async (_req, res) => {
  try {
    const data = await readJson(talkerPath);
    return res.status(200).json(data);
  } catch (e) {
    res.status(500).send({ message: `error: ${e}` });
  }
});

talkerRoute.get('/:id', async (req, res) => {
  try {
    const data = await readJson(talkerPath);
    const { id } = req.params;
    const filteredData = data.find((talker) => talker.id === +id);
    if (!filteredData) { 
      res.status(404).json({
        message: 'Pessoa palestrante não encontrada',
      });
    } else {
      res.status(200).json(filteredData);
    }
  } catch (e) {
    res.status(500).send({ message: `error: ${e}` });
  }
});

module.exports = talkerRoute;
