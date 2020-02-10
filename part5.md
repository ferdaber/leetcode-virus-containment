## Wrapping it Up

Now that each iteration can be run, all that's left to do is to complete the loop and play the game. Given an initial grid, complete each iteration and return the number of walls that was built before the game ended.

```ts
let grid = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

declare function containVirus(grid: number[][]): number;

// the game ends by the second day
expect(containVirus(grid), 10);

// after first day
// prettier-ignore
expect(grid, [
  [0, -1, 0, 0, 0, 0, 1, 1],
  [0, -1, 0, 0, 0, 0, 1, 1],
  [0,  0, 0, 0, 0, 0, 1, 1],
  [0,  0, 0, 0, 0, 0, 0, 1]
]);

// after second day
// prettier-ignore
expect(grid, [
  [0, -1, 0, 0, 0, 0, -1, -1],
  [0, -1, 0, 0, 0, 0, -1, -1],
  [0,  0, 0, 0, 0, 0, -1, -1],
  [0,  0, 0, 0, 0, 0,  0, -1]
]);
```
