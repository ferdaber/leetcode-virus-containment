/**
 * the flat index is the number if you count left-right, top-bottom
 * from the top-left corner of the grid
 * @param {unknown[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @returns {number}
 */
function getFlatIdx(grid, rowIdx, colIdx) {
  return rowIdx * grid[0].length + colIdx;
}

/**
 * the row/col pair can be retrieved by using modulus arithmetic
 * @param {unknown[][]} grid
 * @param {number} flatIdx
 * @returns {[number, number]}
 */
function getRowColIdx(grid, flatIdx) {
  const numColumns = grid[0].length;
  const rowIdx = Math.floor(flatIdx / numColumns);
  const colIdx = flatIdx % numColumns;
  return [rowIdx, colIdx];
}

module.exports = { getFlatIdx, getRowColIdx };
