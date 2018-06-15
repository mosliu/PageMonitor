const cron_jdchepin = require('./cron_jdchepin');

function start() {
  cron_jdchepin();
}

module.exports = {
  start,
};
