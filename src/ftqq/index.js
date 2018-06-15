const rp = require('request-promise-native');
const conf = require('../config');

const options = {
  method: 'POST',
  uri: conf.ftqq.url,
  encoding: null,
  headers: {
    'Content-type': 'application/x-www-form-urlencoded',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36',
  },

};


async function sendPost(title, content) {
  const form = {
    text: title,
    desp: content,
  };
  options.formData = form;
  const body = await rp(options);
  const rtn = JSON.parse(body.toString());
  console.log(rtn);
  return rtn;
}
// sendPost('aba', 'hoho');
module.exports = {
  sendPost,
};
