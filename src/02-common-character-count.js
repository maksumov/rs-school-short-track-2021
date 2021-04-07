/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const common = [];
  const s2copy = s2.split('');
  s1.split('').forEach((char) => {
    const idx = s2copy.findIndex((el) => el === char);
    if (idx !== -1) {
      common.push(s2copy.splice(idx, 1));
    }
  });
  return common.length;
}

module.exports = getCommonCharacterCount;
