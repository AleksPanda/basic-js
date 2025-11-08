const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = n.toString();
  let result = 0;

  for (let i = 0; i < digits.length; i++) {
    const num = digits.slice(0, i) + digits.slice(i + 1);
    const current = parseInt(num);

    if (current > result) {
      result = current;
    }
  }

  return result;
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit
};
