## Progressing the Game

Now that the necessary information is scanned at the start of each iteration, the game must now progress. Write a function that completes a single iteration of the game, it should:

1. Call the `findRegions()` function on the grid that you completed in the previous part.
2. Find the most lethal region, and quarantine it. When performing a quarantine, two things happen:
   - Every cell in that region is now quarantined (for efficiency purposes, you can set the value of that cell in the grid to `-1`).
   - Increment the number of walls built by the perimeter of that region. Since you're only implementing a single iteration, it is sufficient to later return that value once the infection stage is complete.
3. For every other region, infect their vulnerable neighbors by setting the value of those cells to `1` in the grid. You may modify the grid in place.

If there are no infected and unquarantined regions, or the grid is completely infected, return `0` since there is no need to build any more walls.

> _Hint_ — the most lethal region to triage is the one that has the greatest number of vulnerable neighbors since it has the capacity to infect the greatest number of cells on that day. The input grid is guaranteed to give you one unique lethal region per day.

```ts
let grid = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// return the number of walls built for that day
declare function iterateGrid(grid: number[][]): number;

expect(iterateGrid(grid), 5);
// prettier-ignore
expect(grid, [
  [0, -1, 0, 0, 0, 0, 1, 1],
  [0, -1, 0, 0, 0, 0, 1, 1],
  [0,  0, 0, 0, 0, 0, 1, 1],
  [0,  0, 0, 0, 0, 0, 0, 1]
]);
```
