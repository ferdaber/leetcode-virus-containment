const { getFlatIdx } = require("./part1");

/**
 * helper function to iterate over each neighbor given a cell coordinate
 * @param {unknown[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @param {(rowIdx: number, colIdx: number) => void} cb
 * @returns {void}
 */
function forEachNeighbor(grid, rowIdx, colIdx, cb) {
  const dirs = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ];
  const numRows = grid.length;
  const numColumns = grid[0].length;
  return dirs
    .map(([dr, dc]) => [rowIdx + dr, colIdx + dc])
    .filter(
      ([rowIdx, colIdx]) =>
        rowIdx >= 0 && rowIdx < numRows && colIdx >= 0 && colIdx < numColumns
    )
    .forEach(([rowIdx, colIdx]) => cb(rowIdx, colIdx));
}

/**
 * @param {number[][]} grid
 * @param {number} rowIdx
 * @param {number} colIdx
 * @returns {null | Set<number>}
 */
function findRegion(grid, rowIdx, colIdx) {
  if (grid[rowIdx][colIdx] === 0) return null;
  /** @type {Set<number>} */
  const visited = new Set();
  /** @type {Set<number} */
  const region = new Set();

  /**
   * @param {number} rowIdx
   * @param {number} colIdx
   */
  function dfs(rowIdx, colIdx) {
    const flatIdx = getFlatIdx(rowIdx, colIdx);
    const cellValue = grid[rowIdx][colIdx];
    if (!visited.has(flatIdx)) {
      visited.add(flatIdx);

      if (cellValue === 1) {
        region.add(flatIdx);
        forEachNeighbor(rowIdx, colIdx, dfs);
      }
    }
  }
  dfs(rowIdx, colIdx);

  return region;
}

/**
 * @param {number[][]} grid
 * @returns {Set<number>[]}
 */
function findRegions(grid) {
  /**
   * @param {Set<number>} region
   * @param {number} rowIdx
   * @param {number} colIdx
   */
  function dfs(region, rowIdx, colIdx) {
    const flatIdx = getFlatIdx(rowIdx, colIdx);
    const cellValue = grid[rowIdx][colIdx];
    if (!visited.has(flatIdx)) {
      visited.add(flatIdx);

      if (cellValue === 1) {
        region.add(flatIdx);
        forEachNeighbor(rowIdx, colIdx, dfs);
      }
    }
  }

  /** @type {Set<number>} */
  const visited = new Set();
  /** @type {Set<number>[]} */
  const regions = [];

  grid.forEach((row, rowIdx) => {
    row.forEach((cellValue, colIdx) => {
      if (!visited.has(getFlatIdx(grid, rowIdx, colIdx)) && cellValue === 1) {
        const region = new Set();
        dfs(region, rowIdx, colIdx);
        regions.push(region);
      }
    });
  });

  return regions;
}

module.exports = { forEachNeighbor };
