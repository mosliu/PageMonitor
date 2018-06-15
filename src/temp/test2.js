const cache = require('../utils/cache');

function dosth() {
  console.log('test2:', 'before', cache.get('test'));
  cache.put('test', 'test2');
  console.log('test2:', 'after', cache.get('test'));
}

exports.dosth2 = dosth;
