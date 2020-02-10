# Virus Containment Exercise

> https://leetcode.com/problems/contain-virus/

A virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.

The world is modeled as a grid of cells, where 0 represents uninfected cells, and 1 represents cells contaminated with the virus. A wall (and only one wall) can be installed between any two 4-directionally (north, south, east, west) adjacent cells, on the shared boundary.

Every night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall. Each day, you can install walls around only one **region** -- the affected area (contiguous block of infected cells) that threatens the most uninfected cells the following night. There will never be a tie.

Can you save the day? If so, what is the number of walls required? If not, and the world becomes fully infected, return the number of walls used.

## Notes

- Assume that the grid is at least 1x1 and at most 50x50 in size.
- Assume that the input grid will either have the value `0` or `1` on each cell.
- A **region** is defined as a contiguous area of cells that are infected, the boundary of a region is either a wall (if a there is another infected cell next to the region but there is a wall in-between), or uncontaminated cells.
- Assume that in each iteration, there will always be uniquely one region that will infect more uncontaminated cells than any other region.
- There is a `utils.js` module that allows you to print a grid to the console that displays infected, uninfected, and quarantined cells at any given time.

## Examples

#### Two Regions

```
Input:
[[0,1,0,0,0,0,0,1],
 [0,1,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,1],
 [0,0,0,0,0,0,0,0]]

Output: 10

Explanation:
There are 2 contaminated regions.
On the first day, add 5 walls to quarantine the viral region on the left (the most threatening one). The board after the virus spreads by the second day is:

[[0,1,0,0,0,0,1,1],
 [0,1,0,0,0,0,1,1],
 [0,0,0,0,0,0,1,1],
 [0,0,0,0,0,0,0,1]]

On the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.
```

#### One Region

```
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]

Output: 4

Explanation: Even though there is only one cell saved, there are 4 walls built.
Notice that walls are only built on the shared boundary of two different cells.
```

#### Regions with Shared Boundaries

```
Input:
[[1,1,1,0,0,0,0,0,0],
 [1,0,1,0,1,1,1,1,1],
 [1,1,1,0,0,0,0,0,0]]

Output: 13

Explanation: The region on the left only builds two new walls.
```

## Approach

The general approach to solve this problem is split into three parts, which repeats on each day (iteration) until the grid is either all walled up (quarantined), or the grid is fully infected; on each day:

1. Traverse through the grid and find all infected regions. For each region, we calculate three measures:
   1. Which infected cells are in the region?
   2. Which are the vulnerable cells that the region can infect by the next day, if it were not quarantined?
   3. What is the perimeter of the region? The perimeter tells us how many walls we have to build to quarantine the region.
2. After the regions are found, we then find the region with the greatest threat: the most lethal region is the one that has the greatest number of vulnerable cells.
   1. When the lethal region is found, we quarantine that region such that its cells can no longer spread on any subsequent day. We also build walls around that region.
3. After the lethal region is quarantined, every other region will then proceed to infect their respective vulnerable cells.
4. The current day ends, and the next day begins and the iteration repeats.

#### Pseudocode

```
function contain_virus:
  walls_built = 0
  while true:
    regions = find_regions(grid)
    # no more infected regions, everything is quarantined
    break if !regions.length
    # everything is infected, we lost the game
    break if all_infected(grid)

    # find and quarantine the most lethal region
    most_lethal_region = find_most_lethal_region(regions)
    walls_built += most_lethal_region.perimeter
    for cell in most_lethal_region.cells:
      quarantine(cell)
    end

    # infect everything else
    for region in not most_lethal_region:
      for cell in region.vulnerable_cells:
        infect(cell)
  end
  return walls_built
```

## Instructions

Go through each `partN.js` file in order, and when complete, you can combine all of your code in one file and try to submit it via [leetcode](https://leetcode.com/problems/contain-virus/).
