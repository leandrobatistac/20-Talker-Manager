const fs = require('fs').promises;

const readJson = async (path) => {
    try {
        const data = await fs.readFile(path);
        return JSON.parse(data);
    } catch (e) {
        console.error(`Error reading: ${e}`);
    }
};

module.exports = readJson;