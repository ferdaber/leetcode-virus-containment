## Finding Vulnerable Cells and Perimeters

The code for finding regions so far will only return the infected cells for each region. We are now extending that functionality such that for each region, it will also find vulnerable cells that are adjacent to that region, and perimeters that you can build walls on. Using the code from the previous part, also return, for each region, the number of vulnerable cells and the perimeter of that region.

> _Hint_ — the set of vulnerable cells is defined as any uninfected cell that is adjacent (north, south, east, west) to an infected cell in a region, and the perimeter is very similar, except that neighboring infected cells that share an uninfected cell both count in the perimeter: if a region is L-shaped, that means that two of the infected cells share the same uninfected neighbor (vulnerable cell), but they do not share a perimeter (you can build walls on each of those two cells because they do not share a boundary).

Given this grid (where `X` is an infected cell):

```
·—·—·—·
| |X| |
·—·—·—·
| |X|X|
·—·—·—·
| | | |
·—·—·—·
```

The vulnerable cells are (denoted by `%`):

```
·—·—·—·
|%|X|%|
·—·—·—·
|%|X|X|
·—·—·—·
| |%|%|
·—·—·—·
```

And its perimeter has the value `6`, since those are the walls that can be built to prevent infection (the boundaries of the grid do not need to be walled since there's nothing past them).

```ts
const grid: number[][] = [
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

// a region is defined as an object that has three properties
interface Region {
  // the infected cells (the set of flat indices)
  infectedCells: Set<number>;
  // the vulnerable neighboring cells (another set of flat indices)
  vulnerableNeighbors: Set<number>;
  // the number of walls that need to be built to quarantine the region
  wallablePerimeter: number;
}

declare function findRegions(grid: number[][]): Region[];

expect(findRegions(grid), [
  {
    infectedCells: new Set([1, 9]),
    vulnerableNeighbors: new Set([0, 2, 8, 10, 17]),
    wallablePerimeter: 5
  },
  {
    infectedCells: new Set([7, 15, 22, 23]),
    vulnerableNeighbors: new Set([6, 14, 21, 30, 31]),
    wallablePerimeter: 6
  }
]);
```
