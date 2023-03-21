const fs = require('fs').promises;

const path = require('path');

const talkerPath = path.resolve(__dirname, '../talker.json');

const getAllTalkers = async () => {
    try {
        const data = await fs.readFile(talkerPath);
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading: ${e}`);
    }
};

module.exports = { 
    getAllTalkers,
};