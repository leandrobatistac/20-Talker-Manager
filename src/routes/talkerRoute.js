const { Router } = require('express');
const { addNewTalker } = require('../utils/addNewTalker');
const { getAllTalkers } = require('../utils/getAllTalkers');
const {
    validateToken,
    valitadeName,
    valitadeNameSize,
    validateAge,
    validateAgeValue,
    validateTalk,
    validateWatchedAt,
    validateWatchedAtValue,
    validateRate,
    validateRateValue,
} = require('../middlewares/talkerValidates');
const { updateTalkers } = require('../utils/updateTalkers');

const talkerRoute = Router();
const validate = [
  validateToken,
  valitadeName,
  valitadeNameSize,
  validateAge,
  validateAgeValue,
  validateTalk,
  validateWatchedAt,
  validateWatchedAtValue,
  validateRate,
  validateRateValue,
];

talkerRoute.get('/', async (_req, res) => {
  try {
    const data = await getAllTalkers();
    return res.status(200).json(data);
  } catch (e) {
    res.status(500).send({ message: `error: ${e}` });
  }
});

talkerRoute.get('/:id', async (req, res) => {
  try {
    const data = await getAllTalkers();
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

talkerRoute.post('/', ...validate, async (req, res) => {
  try {
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const data = await getAllTalkers();
    const newTalker = {
      id: data.length + 1,
      name,
      age,
      talk: { watchedAt, rate },
    };
    await addNewTalker(newTalker);
    return res.status(201).json(newTalker);
  } catch (e) {
      res.status(500).send({ message: `error: ${e}` });
  }
});

talkerRoute.put('/:id', ...validate, async (req, res) => {
  try {
    const talker = req.body;
    const { id } = req.params;
    const editedTalker = await updateTalkers(talker, +id);
    if (!editedTalker) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    } return res.status(200).json(editedTalker);
  } catch (e) {
      res.status(500).send({ message: `error: ${e}` });
  }
});

module.exports = talkerRoute;
