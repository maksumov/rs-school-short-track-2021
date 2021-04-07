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
  const nn = String(n);
  return Array.from({ length: nn.length },
    (_, i) => nn.substring(0, i) + nn.substring(i + 1))
    .reduce((a, c) => (+c > a ? +c : a), 0);
}

module.exports = deleteDigit;
