const program = require('commander');
const check = require('../commands/check');
program
    .command('price')
    .description('check price of coins')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'ripple,bitcoin,ethereum,dogecoin,binancecoin,litecoin,cardano,stellar,solana,polygon')
    .option('--curr <currency>', 'Change the currency', 'usd')
    .action((cmd) => check.price(cmd))

program.parse(process.argv);