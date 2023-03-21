const fs = require('fs').promises;

const path = require('path');
const { getAllTalkers } = require('./getAllTalkers');

const talkerPath = path.resolve(__dirname, '../talker.json');

const deleteTalker = async (id) => {
  const data = await getAllTalkers(talkerPath);
  const filteredTalker = data.filter((e) => e.id !== +id);
  await fs.writeFile(talkerPath, JSON.stringify(filteredTalker));
};

module.exports = { 
  deleteTalker,
};
