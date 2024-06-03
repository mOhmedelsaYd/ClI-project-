const configStore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new configStore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apikey', key);
        return key
    }

    getKey() {
        const key = this.conf.get('apikey');
        
        if (!key) {
            throw new Error('No API Key Found - Get a key at https://coingecko.com');
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get('apikey');
        
        if (!key) {
            throw new Error('No API Key Found - Get a key at https://coingecko.com');
        }

        this.conf.delete('apikey');

        return;
    }
}

module.exports =  KeyManager;