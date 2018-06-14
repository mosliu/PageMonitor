/**
 * Created by Moses on 2017/8/4.
 */
const path = require('path');

// __dirname : ***\src\config
// path.dirname(p)  返回路径的所在的文件夹名称
// srcRoot: ***\src
const srcRoot = path.dirname(__dirname);
const rootDir = path.resolve(srcRoot, '../');
const confDir = path.join(srcRoot, 'config');
const logsDir = path.join(rootDir, 'logs');

const dirConf = {
  root: rootDir,
  log: logsDir,
  src: srcRoot,
  config: confDir,
};

module.exports = dirConf;
