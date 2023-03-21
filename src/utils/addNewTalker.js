const fs = require('fs').promises;

const path = require('path');
const { getAllTalkers } = require('./getAllTalkers');

const talkerPath = path.resolve(__dirname, '../talker.json');

const addNewTalker = async (talker) => {
  try {
    const data = await getAllTalkers(talkerPath);
    data.push(talker);
    return await fs.writeFile(talkerPath, JSON.stringify(data));
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = { 
  addNewTalker,
};
