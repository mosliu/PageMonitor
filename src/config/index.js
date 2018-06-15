/**
 * Created by Moses on 2017/8/4.
 */
const path = require('path');
const fs = require('fs');
const merge = require('lodash/merge');
const debug = require('debug')('config');
const dirConf = require('./dirs.conf');
const logsConf = require('./logs.conf');
const cronConf = require('./cron.conf');
const ftqqConf = require('./ftqq.conf');

function existsConfigFile(filename) {
  return fs.existsSync(path.join(dirConf.config, filename));
}

const dev = existsConfigFile('dev.js') ? require('./dev') : {
  devconf: 'load error',
};
const pro = existsConfigFile('pro.js') ? require('./pro') : {
  proconf: 'load error',
};


// 返回的config对象
let config = {
  app: {
    name: 'Labthink competitor infomation crawler',
    port: 3030,
  },
  debug: true,
  env: 'production',
  Language: 'zh_CN',

  dir: dirConf,
  log: logsConf,
  cron: cronConf,
  ftqq: ftqqConf,
};

config = merge(config, process.env.NODE_ENV === 'development' ? dev : pro);

// 私人配置文件存在则加载私人配置文件
// config = merge(
//   config,
//   existsConfigFile('private.js') ? require('./private') : { private: 'none' },
// );

if (config.showConfig) {
  debug(config);
  // console.log('============================Config content start============================');
  // console.dir(config);
  // console.log('============================Config content end==============================');
}

module.exports = config;
