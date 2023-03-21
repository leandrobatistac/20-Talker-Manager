const { Router } = require('express');
const generateToken = require('../utils/generateToken');

const loginRoute = Router();

loginRoute.post('/', (_req, res) => {
  try {
    const token = generateToken();
    return res.status(200).json({ token });
  } catch (e) {
    res.status(500).send({ message: `error: ${e}` });
  }
});

module.exports = loginRoute;
