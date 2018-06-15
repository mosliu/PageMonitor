
const cheerio = require('cheerio');
const cache = require('../utils/cache');
const { fetchPage } = require('./crawlerTools');
const debug = require('debug')('jd_chepin');
const ftqq = require('../ftqq');

function getCPID(content) {
  // console.log(content);
  const $ = cheerio.load(content);
  const cpid = $('div#m_1_3 a').attr('data-cpid');
  // console.log(cpid);
  return cpid;
}


async function run() {
  let content = await fetchPage('http://union-click.jd.com/jdc?d=CKG5Xq');
  // eslint-disable-next-line
  const regex = /var hrl='([\w:/\-\?\.=&%]+)'/g;
  const k = regex.exec(content);
  if (k.length === 0) {
    debug('不太正确，未包含跳转信息');
    return;
  }
  const next_url = k[1];
  // console.log(next_url);
  content = await fetchPage(next_url);
  const cpid = getCPID(content);
  const oldcpid = cache.get('cpid');

  if (cpid === oldcpid) {
    // do nothing
    debug('没变化');
  } else {
    cache.put('cpid', cpid);
    cache.save();
    ftqq.sendPost('车品0元单页面已更新', `物品编号：${cpid}\n\n\n [访问地址](http://union-click.jd.com/jdc?d=CKG5Xq)`);
    debug('id changed:', cpid);
    // notify
  }
  // if (oldcpid === null) {

  // }
}

// main();
const jdchepin = {
  run,
};

module.exports = jdchepin;
