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
  /* ... */
}

module.exports = findRegions;
