const level = require('level');
const { dbPath } = require('./config');
const fs = require('fs');

function readAllValues() {
    if (!fs.existsSync(dbPath)) {
        console.error(`Database path does not exist: ${dbPath}`);
        return;
    }

    const db = level(dbPath);

    db.createReadStream()
        .on('data', ({ key, value }) => {
            console.log(`Key: ${key}`);
            try {
                const parsedValue = JSON.parse(value);
                console.log(`Value: ${JSON.stringify(parsedValue, null, 2)}`);
            } catch (e) {
                console.log(`Value: ${value}`);
            }
        })
        .on('error', (err) => {
            console.error('Error reading from LevelDB:', err);
        })
        .on('end', () => {
            console.log('Reading completed.');
            db.close();
        });
}

module.exports = { readAllValues };
