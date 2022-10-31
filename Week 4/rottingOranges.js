// https://leetcode.com/problems/rotting-oranges/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  if (!grid || grid.length === 0) return -1;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) rotAdjacent(grid, i, j, 2);
    }
  }
  // console.log(grid)

  // minutes is offset, because rotten oranges have value of 2
  // it's incremented in the recursion, the largest rotten orange is the last rotten
  let minutes = 2;
  for (const row of grid) {
    for (const cell of row) {
      if (cell === 1) return -1;
      minutes = Math.max(minutes, cell);
    }
  }

  return minutes - 2;
};

function rotAdjacent(grid, i, j, minutes) {
  // out of bounds and no oranges
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return;
  }

  // this orange is already rotted by another rotten orange
  // we have been here e.g. a seen arr, can't go backwards
  // grid[j][j] < min, 2 as starting value ignores fresh oranges at the beginning, finds rotten as start
  if (grid[i][j] > 1 && grid[i][j] < minutes) {
    return;
  }

  // increments grid
  grid[i][j] = minutes;
  rotAdjacent(grid, i - 1, j, minutes + 1);
  rotAdjacent(grid, i + 1, j, minutes + 1);
  rotAdjacent(grid, i, j - 1, minutes + 1);
  rotAdjacent(grid, i, j + 1, minutes + 1);
}
// from solutions - java
// https://leetcode.com/problems/rotting-oranges/solutions/602284/java-dfs-beats-100/
/*
class Solution {
    
    public int orangesRotting(int[][] grid) {
        if(grid == null || grid.length == 0) return -1;
        
        for(int i=0; i<grid.length; i++) {
            for(int j=0; j<grid[0].length; j++) {
                if(grid[i][j] == 2) rotAdjacent(grid, i, j, 2);
            }
        }
        
        int minutes = 2;
        for(int[] row : grid) {
            for(int cell : row) {
                if(cell == 1) return -1;
                minutes = Math.max(minutes, cell);
            }
        }
        
        return minutes - 2;
    }
    
    private void rotAdjacent(int[][] grid, int i, int j, int minutes) {
        if(i < 0 || i >= grid.length /* out of bounds 
          || j < 0 || j >= grid[0].length  out of bounds 
          || grid[i][j] == 0 /* empty cell 
          || (1 < grid[i][j] && grid[i][j] < minutes) this orange is already rotten by another rotten orange 
          ) return;
        else {
            grid[i][j] = minutes;
            rotAdjacent(grid, i - 1, j, minutes + 1);
            rotAdjacent(grid, i + 1, j, minutes + 1);
            rotAdjacent(grid, i, j - 1, minutes + 1);
            rotAdjacent(grid, i, j + 1, minutes + 1);
        }
    }
}
*/
