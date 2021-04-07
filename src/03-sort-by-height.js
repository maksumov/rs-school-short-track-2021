/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const NegativesIdxs = arr.reduce((a, c, i) => (c < 0 ? [...a, i] : a), []);
  const arrSortedWithNoNegatives = arr.filter((v) => v > 0).sort((a, b) => a - b);
  return arr.reduce((a, c, i) => (a.ni[0] === i
    ? { res: [...a.res, -1], ni: a.ni.slice(1), sorted: a.sorted }
    : { res: [...a.res, a.sorted[0]], ni: a.ni, sorted: a.sorted.slice(1) }),
  { res: [], ni: NegativesIdxs, sorted: arrSortedWithNoNegatives }).res;
}

module.exports = sortByHeight;
