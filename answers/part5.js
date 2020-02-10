const iterateGrid = require("./part4");

/**
 * @param {number[][]} grid
 * @return {number}
 */
function containVirus(grid) {
  let wallsBuilt = 0;
  while (true) {
    const wallsBuiltByNextDay = iterateGrid(grid, wallsBuilt);
    // there was no change in the iteration, meaning the game has ended
    // this is kind of funky way to end the game but since the iteration
    // is inside a separate function there's no other way to break out of the
    // while loop
    if (wallsBuilt === wallsBuiltByNextDay) {
      return wallsBuilt;
    } else {
      wallsBuilt = wallsBuiltByNextDay;
    }
  }
}
