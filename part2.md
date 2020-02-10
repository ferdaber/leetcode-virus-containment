## Finding Regions

First, we have to find regions within the grid. A region is defined as a contiguous area (where contiguous means that each cell is next to each other either on the left, right, up, or down direction) where each cell in that area is infected (has the value `1`). Write a function that, given a cell within a grid, determines if it's infected or not, and if it is infected, finds the region in which it is contained, using a depth-first search:

> _Hint_ — it might be useful to create a helper function that, given a cell, returns the locations of its neighbors (north, east, south, and west) within a grid. A neighbor must be within the grid so it cannot go out of bounds of the grid's own size.

> _Hint_ — in the case of a depth-first search where you search a cell's neighbors recursively, you want to keep track of cells that you've already visited to ensure that you don't hit an infinite loop.

```ts
const grid: number[][] = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// the return value of findRegion should either be null (uninfected cell)
// or a set of flat indices that locate the infected cells for that region
declare function findRegion(rowIdx: number, colIdx: number): null | Set<number>;

expect(findRegion(0, 4), null);
expect(findRegion(1, 1), new Set([1, 9]));
expect(findRegion(0, 7), new Set([7, 15, 23]));
expect(findRegion(3, 7), null);
```

## Finding All Regions in the Grid

After finding a single region for a single cell, given the entire grid, iterate through the entire grid and find all of its infected regions.

> _Hint_ — the difference between this one and the previous exercise is that you will need to ensure that you don't find duplicate regions. Whatever you use to keep track of cells you've already visited can be useful for this check.

```ts
const grid: number[][] = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// the return value is the array of all the regions you found (and it can be an empty array if there are no regions)
declare function findRegions(grid: number[][]): Set<number>[];

expect(findRegions(grid), [new Set([1, 9]), new Set([7, 15, 23])]);
```
