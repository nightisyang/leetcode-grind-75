// https://leetcode.com/problems/number-of-islands/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const seen = [];
  let islandCount = 0;

  for (let i = 0; i < grid.length; i++) {
    seen.push(new Array(grid[0].length).fill(false));
  }

  function sailingSevenSeas(x, y, prev) {
    // base condition
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return;
    }

    if (seen[x][y]) {
      return;
    }

    //pre
    seen[x][y] = true;
    let currVal = grid[x][y];

    if (currVal === "1" && prev === "0") {
      // console.log('found island at:', `${x}, ${y}`)
      islandCount += 1;
      // console.log('**** LAND SEARCH PARTY ****')
      walkTheBeach(x, y);
    }

    // console.log('###### ARRRRRRR LETS GO SAILING ######')

    // recurse and find other 1s until all other 1s turn to 0
    sailingSevenSeas(x, y + 1, currVal);
    sailingSevenSeas(x + 1, y, currVal);
    sailingSevenSeas(x - 1, y, currVal);
    sailingSevenSeas(x, y + 1, currVal);
    //post
  }

  function walkTheBeach(x, y) {
    // base condition
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
      return;
    }

    if (grid[x][y] === "0") {
      // console.log('we are at the beach, mark and return')
      return;
    }

    // claim the contiguos island, other PIRATES can't claim if they can't see it
    grid[x][y] = "0";
    // console.log('exploring...')
    walkTheBeach(x + 1, y);
    walkTheBeach(x, y + 1);
    walkTheBeach(x - 1, y);
    walkTheBeach(x, y - 1);
  }

  sailingSevenSeas(0, 0, "0");

  return islandCount;
};
