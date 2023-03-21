const fs = require('fs').promises;

const path = require('path');
const { getAllTalkers } = require('./getAllTalkers');

const talkerPath = path.resolve(__dirname, '../talker.json');

const updateTalkers = async (talker, id) => {
  try {
    const data = await getAllTalkers(talkerPath);
    const { name, age, talk } = talker;
    const talkerObject = data.find((e) => e.id === +id);
    if (!talkerObject) {
      return false;
    }
    talkerObject.name = name;
    talkerObject.age = age;
    talkerObject.talk = talk;

    await fs.writeFile(talkerPath, JSON.stringify(data));
    return talkerObject;
  } catch (error) {
    const err = new Error('Error writing file');
    err.statusCode = 500;
    throw err;
  }
};

module.exports = { 
  updateTalkers,
};
