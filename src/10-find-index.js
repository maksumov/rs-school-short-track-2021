/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let pos = Math.ceil(array.length / 2);
  let step = Math.ceil(pos / 2);

  while (array[pos] - value) {
    if (step < 1) step = 1;
    if (array[pos] > value) {
      pos -= step;
    } else {
      pos += step;
    }
    if (pos < 0) pos = 0;
    if (pos > array.length - 1) pos = array.length - 1;
    step = Math.ceil(step / 2);
  }

  return pos;
}

module.exports = findIndex;
