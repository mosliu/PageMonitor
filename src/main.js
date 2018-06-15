process.env.debug = '*,-retry-as-promised,-log4js*,-streamroller:*';
process.env.NODE_ENV = 'development';

const crons = require('./crons');

crons.start();
