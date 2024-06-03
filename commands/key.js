const  inquirer   = require('inquirer');
const KeyManager =  require('../lib/KeyManager');
const colors = require('colors');
const { isRequired } = require('../util/isRequired');


const key = {
    async set() {
        const KeManager = new KeyManager();
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter API Key '.green + 'https://coingecko.com',
                validate: isRequired
            }
        ]);

        const key = KeManager.setKey(input.key);

        if (key) {
            console.log('API Key Set'.blue);
        }
    },

    show() {
        try {
            const KeManager = new KeyManager();
            const key = KeManager.getKey();
            console.log('Current API Key: ', key.yellow);

            return key;
        } catch (err) {
            console.error(err.message.red)
        }
    },

    remove() {
        try {
            const KeManager = new KeyManager();
            KeManager.deleteKey();
            console.log('Key Removed'.blue);

            return;
        } catch (err) {
            console.error(err.message.red)
        }
    }
}

module.exports = key;