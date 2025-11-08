const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};

  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i];
    let parts = domain.split('.');
    let dns = '';

    for (let j = parts.length - 1; j >= 0; j--) {
      dns += '.' + parts[j];
      if (res[dns] === undefined) {
        res[dns] = 1;
      } else {
        res[dns]++;
      }
    }
  }

  return res;
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
