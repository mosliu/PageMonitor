const minute = {
  // 每分钟
  at8: '8 * * * * *',
};
const crawler = {
  // 每小时
  crontab: '0 41 * * * *',
};
const analyzer = {
  // 每小时
  crontab: '0 */5 * * * *',
};
const cronConf = {
  crawler,
  analyzer,
  minute,
};

module.exports = cronConf;
