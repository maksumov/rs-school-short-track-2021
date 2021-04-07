/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

/**
 *
 * @param {Number} x - x coordinate of field
 * @param {Number} y - y coordinate of field
 * @param {Number} lenX - size of field by x coordinate
 * @param {Number} lenY - size of field by y coordinate
 * @returns coords of all neighborhood field cells
 */
function neighborsList(x, y, lenX, lenY) {
  const maybeNeighbors = [
    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
    [x - 1, y], [x + 1, y],
    [x - 1, y + 1], [x, y + 1], [x + 1, y + 1],
  ];

  return maybeNeighbors.filter(([x2, y2]) => x2 >= 0 && x2 < lenX && y2 >= 0 && y2 < lenY);
}

function minesweeper(matrix) {
  return matrix.map((_, y) => _
    .map(($, x) => neighborsList(x, y, _.length, matrix.length)
      .reduce((a, [x2, y2]) => a + matrix[y2][x2], 0)));
}

module.exports = minesweeper;
