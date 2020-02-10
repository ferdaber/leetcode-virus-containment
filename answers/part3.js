const { getFlatIdx } = require("./part1");
const { forEachNeighbor } = require("./part2");

/** @typedef {{
 *    infectedCells: Set<number>
 *    vulnerableNeighbors: Set<number>
 *    wallablePerimeter: number
 * }} Region */

/**
 * @param {number[][]} grid
 * @return {Region[]}
 */
function findRegions(grid) {
  /**
   * @param {Region} region
   * @param {number} rowIdx
   * @param {number} colIdx
   */
  function dfs(region, rowIdx, colIdx) {
    const flatIdx = getFlatIdx(rowIdx, colIdx);
    if (!visited.has(flatIdx)) {
      visited.add(flatIdx);
      region.infectedCells.add(flatIdx);

      forEachNeighbor(rowIdx, colIdx, (neighborRowIdx, neighborColIdx) => {
        const neighborCellValue = grid[neighborRowIdx][neighborColIdx];
        if (neighborCellValue === 1) {
          dfs(region, neighborRowIdx, neighborColIdx);
        } else if (neighborCellValue === 0) {
          const neighborFlatIdx = getFlatIdx(neighborRowIdx, neighborColIdx);
          // this check is technically not necessary, it just highlights that using a set
          // will automatically deduplicate vulnerable cell locations in case two infected
          // cells share the same vulnerable neighbor
          if (!region.vulnerableNeighbors.has(neighborFlatIdx)) {
            region.vulnerableNeighbors.add(neighborFlatIdx);
          }
          // the perimeter is always incremented because two infected cells that share
          // the same uninfected neighbor can never share a boundary
          region.wallablePerimeter++;
        }
      });
    }
  }

  /** @type {Set<number>} */
  const visited = new Set();
  /** @type {Set<Region>[]} */
  const regions = [];

  grid.forEach((row, rowIdx) => {
    row.forEach((cellValue, colIdx) => {
      if (!visited.has(getFlatIdx(grid, rowIdx, colIdx)) && cellValue === 1) {
        /** @type {Region} */
        const region = {
          infectedCells: new Set(),
          vulnerableNeighbors: new Set(),
          wallablePerimeter: 0
        };
        dfs(region, rowIdx, colIdx);
        regions.push(region);
      }
    });
  });

  return regions;
}

module.exports = findRegions;
