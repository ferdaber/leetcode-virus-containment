const { getRowColIdx } = require("./part1");
const { findRegions } = require("./part3");

/**
 * @param {number[][]} grid
 * @param {number} wallsBuilt
 * @return {number}
 */
function iterateGrid(grid, wallsBuilt) {
  const regions = findRegions(grid);

  if (!regions.length) return wallsBuilt;
  if (grid.every(row => row.every(cell => cell !== 0))) return wallsBuilt;

  const triagedRegion = regions.reduce((regionA, regionB) =>
    regionB.vulnerableNeighbors.size > regionA.vulnerableNeighbors.size
      ? regionB
      : regionA
  );
  wallsBuilt += triagedRegion.wallablePerimeter;

  triagedRegion.infectedCells.forEach(flatIdx => {
    const [rowIdx, colIdx] = getRowColIdx(flatIdx);
    grid[rowIdx][colIdx] = -1;
  });

  regions.forEach(region => {
    if (region !== triagedRegion) {
      region.vulnerableNeighbors.forEach(flatIdx => {
        const [rowIdx, colIdx] = getRowColIdx(flatIdx);
        grid[rowIdx][colIdx] = 1;
      });
    }
  });

  return wallsBuilt;
}

module.exports = iterateGrid;
