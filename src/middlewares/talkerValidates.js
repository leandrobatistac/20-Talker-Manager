const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
      return res.status(401).json({ message: 'Token não encontrado' });
  }

  if (authorization.length !== 16) {
      return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const valitadeName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
      return res.status(400).json({
          message: 'O campo "name" é obrigatório' });
  }
  next();
};

const valitadeNameSize = (req, res, next) => {
  const { name } = req.body;
  if (name.length < 3) {
      return res.status(400).json({
          message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
      return res.status(400).json({
          message: 'O campo "age" é obrigatório' });
  }
  next();
};

const validateAgeValue = (req, res, next) => {
  const { age } = req.body;
  if (typeof age !== 'number' || age < 18 || !Number.isInteger(age)) {
      return res.status(400).json({
          message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
  next();
};

const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) {
      return res.status(400).json({
          message: 'O campo "talk" é obrigatório' });
  }
  next();
};

const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  if (!watchedAt) {
      return res.status(400).json({
          message: 'O campo "watchedAt" é obrigatório' });
  }
  next();
};

const validateWatchedAtValue = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!regex.test(watchedAt)) {
      return res.status(400).json({
          message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (!rate && rate !== 0) {
      return res.status(400).json({
          message: 'O campo "rate" é obrigatório' });
  }
  next();
};

const validateRateValue = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (rate < 1 || rate > 5 || !Number.isInteger(rate) || rate === 0) {
      return res.status(400).json({
          message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
  }
  next();
};

module.exports = {
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
};