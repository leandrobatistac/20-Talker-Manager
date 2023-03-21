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

module.exports = talkerRoute;
