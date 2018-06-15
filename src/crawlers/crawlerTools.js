const rp = require('request-promise-native');
const iconv = require('iconv-lite');
const debug = require('debug')('CrawlerTools');

function handleError(err) {
  if (err.statusCode) {
    debug(`ErrorCode:${err.statusCode}`);
    debug(`Error uri:${err.options.uri}`);
    debug(`Error Response:${err.response}`);
  } else {
    debug(`Error Occurd :  ${err}`);
  }
  // console.log(`error message is ${err.message}`);
  // const response = err.response;
  return '';
}

async function fetchPage(url, encoding = 'utf8') {
  const options = {
    uri: url,
    encoding: null,
    headers: {
      // eslint-disable-next-line
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      // eslint-disable-next-line
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36',
    },
    // eslint-disable-next-line
    transform(body, response, resolveWithFullResponse) {
      // let ret = body;
      // if (encoding !== null) {
      //   ret = iconv.decode(body, 'GBK');
      // }
      // console.log(response.statusCode);
      return iconv.decode(body, encoding);
    },
  };

  const content = await rp(options).catch(handleError);

  return content;
}


const Tools = {
  fetchPage,
};
module.exports = Tools;
