const config = require('../config');
const { CronJob } = require('cron');
const debug = require('debug')('Cron:jdchepin');
const jdchepin = require('../crawlers/jdchepin');


const cronconf = config.cron.minute;

async function startAnalyzer() {
  debug('Cron triggered ,Jdchepin Start');
  await jdchepin.run();
}


function Prepare() {
  // '0 * * * *'
  return new CronJob(cronconf.at8, (async () => {
    await startAnalyzer();
  }), null, true, 'Asia/Chongqing');
}
module.exports = Prepare;
// startAnalyze();
