## Flat Indices

When dealing with grids or multi-dimensional arrays, it often helps to work in "flat indices," where you flatten a pair of coordinates into a single index. This allows for easy indexing and retrieval when working with other primitives like sets and maps. Given a 2-dimensional array (a grid), write two functions:

- one that will translate a `rowIdx` and `colIdx` pair into its flat index
- one that will translate a `flatIdx` into a pair of `rowIdx` and `colIdx`

```ts
// a 4x8 array (4 rows, 8 columns)
const grid: number[][] = Array.from({ length: 4 }, () => Array(8).fill(0));

declare function getFlatIdx(rowIdx: number, colIdx: number): number;
declare function getRowColIdx(flatIdx: number): [number, number];

expect(getFlatIdx(0, 0), 0);
expect(getFlatIdx(1, 0), 8);
expect(getFlatIdx(2, 3), 19);
expect(getFlatIdx(3, 4), 28);

expect(getRowColIdx(17), [2, 1]);
expect(getRowColIdx(7), [0, 7]);
expect(getRowColIdx(29), [3, 5]);
```
