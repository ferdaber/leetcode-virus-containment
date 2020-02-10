const { getFlatIdx } = require("./part1");

/**
 * @param {unknown[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @param {(rowIdx: number, colIdx: number) => void} cb
 * @returns {void}
 */
function forEachNeighbor(grid, rowIdx, colIdx, cb) {
  /* ... */
}

/**
 * @param {number[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @returns {null | Set<number>}
 */
function findRegion(grid, rowIdx, colIdx) {
  /* ... */
}

/**
 * @param {number[][]} grid
 * @returns {Set<number>[]}
 */
function findRegions(grid) {
  /* ... */
}

module.exports = { forEachNeighbor };
