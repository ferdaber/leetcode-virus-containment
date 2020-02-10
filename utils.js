/**
 *
 * @param {(0 | 1 | -1)[][]} grid
 */
function printGrid(grid) {
  const rows = grid[0].length;
  const separator =
    "\n·" +
    Array(rows)
      .fill("—")
      .join("·") +
    "·\n";
  const str = grid
    .map(
      row =>
        "|" +
        row.map(val => (val === 1 ? "🦠" : val === -1 ? "🔒" : " ")).join("|") +
        "|"
    )
    .join(separator);
  console.log(separator + str + separator);
}

module.exports = {
  printGrid
};
