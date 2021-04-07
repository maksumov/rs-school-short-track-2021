/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce(
    (a, c) => ({
      result: c.map((el, i) => (!a.filter[i] ? el + (+a.result[i] || 0) : a.result[i] || 0)),
      filter: c.map((el, i) => (el === 0 ? true : a.filter[i])),
    }),
    {
      result: [],
      // behavior of filter: true - filter (not add number to sum), false || undefined - not filter
      filter: [],
    },
  ).result.reduce((a, c) => a + c, 0);
}

module.exports = getMatrixElementsSum;
