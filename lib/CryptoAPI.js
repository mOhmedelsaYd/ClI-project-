const axios = require('axios');
const colors = require('colors');


class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.coingecko.com/api/v3/coins/markets'
    }

    async getPriceData(coinOption, currOption) {
        try {

            const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currOption
        });

            const res = await axios.get(`${this.baseUrl}?vs_currency=${currOption}&ids=${coinOption}&demo=${this.apiKey}`);

            let output = '';

            

            res.data.forEach((coin) => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${formatter.format(coin.current_price).green} | Rank: ${String(coin.market_cap_rank).blue}\n`;
            })
            
            return output;
        } catch (err) {
            handleError(err)
        }
    }
}

function handleError(err) {
        if (err.response.status === 401) {
        throw new Error('Your API key is invalid - Go to https://coingecko.com');
        } else if (err.response.status === 404) {
        throw new Error('Your API is not responding');
    } else {
    throw new Error('Something is not working');
}
}
module.exports = CryptoAPI;