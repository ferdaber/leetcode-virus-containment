/**
 * @param {unknown[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @returns {number}
 */
function getFlatIdx(grid, rowIdx, colIdx) {
  /* ... */
}

/**
 * the row/col pair can be retrieved by using modulus arithmetic
 * @param {unknown[][]} grid
 * @param {number} flatIdx
 * @returns {[number, number]}
 */
function getRowColIdx(grid, flatIdx) {
  /* ... */
}

module.exports = { getFlatIdx, getRowColIdx };
