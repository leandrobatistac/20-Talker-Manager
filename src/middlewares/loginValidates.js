const validateName = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
      return res.status(400).json({
          message: 'O campo "email" é obrigatório',
          });
  }
  return next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"',
  });
  } 
  return next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
      return res.status(400).json({
          message: 'O campo "password" é obrigatório',
          });
  }
  return next();
};

const validatePasswordSize = (req, res, next) => {
  const { password } = req.body;
  const magicNumber = 6;
  if (password.length < magicNumber) {
      return res.status(400).json({
          message: 'O "password" deve ter pelo menos 6 caracteres',
          });
  }
  return next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  validatePasswordSize,
};