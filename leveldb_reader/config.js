const path = require('path');
const os = require('os');

function getChromeUserDataDir() {
    switch (os.platform()) {
        case 'win32':
            return path.join(os.homedir(), 'AppData', 'Local', 'Google', 'Chrome', 'User Data', 'Default');
        case 'darwin':
            return path.join(os.homedir(), 'Library', 'Application Support', 'Google', 'Chrome', 'Default');
        case 'linux':
            return path.join(os.homedir(), '.config', 'google-chrome', 'Default');
        default:
            throw new Error('Unsupported platform!');
    }
}

const chromeUserDataDir = getChromeUserDataDir();
const extensionId = 'YOUR_EXTENSION_ID'; // Replace with your extension's ID
const dbPath = path.join(chromeUserDataDir, 'Local Extension Settings', extensionId);

module.exports = { dbPath };
