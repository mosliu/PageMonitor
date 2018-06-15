const cache = require('../utils/cache');

function dosth() {
  console.log('test1:', 'before', cache.get('test'));
  cache.put('test', 'test1');
  console.log('test1:', 'after', cache.get('test'));
}

exports.dosth = dosth;
