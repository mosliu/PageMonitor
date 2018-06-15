const fs = require('fs');

class Cache {
  // constructor
  constructor() {
    this._cache = Object.create(null);
    this.load();
  }
  put(key, value) {
    this._cache[key] = value;
  }
  del(key) {
    delete this._cache[key];
  }
  clear() {
    this._cache = Object.create(null);
  }
  get(key) {
    const value = this._cache[key];
    if (typeof value !== 'undefined') {
      return value;
    }
    return null;
  }

  save() {
    fs.writeFileSync('cachefile.json', JSON.stringify(this._cache));
  }

  load() {
    // this._cache = JSON.parse(fs.readFileSync('cachefile.json', 'utf8'));
    fs.readFile('cachefile.json', 'utf-8', (err, data) => {
      if (err) {
        // donothing
      } else {
        console.log('load cache');
        this._cache = JSON.parse(data);
      }
    });
  }
}


module.exports = new Cache();
// module.exports.Cache = Cache;
