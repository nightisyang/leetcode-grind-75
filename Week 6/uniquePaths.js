// https://leetcode.com/problems/unique-paths/
var uniquePaths = function (m, n) {
  let map = [];

  for (let i = 0; i < m; i++) {
    map.push(new Array(n).fill(0));
  }

  return walk(0, 0, m, n, map, 0);
};

function walk(x, y, m, n, map, count) {
  // base condition
  if (x >= m || y >= n) {
    return 0;
  }

  // we've been here before, just add
  if (map[x][y] !== 0) {
    return map[x][y];
  }

  // if arrived at target return 1
  if (x === m - 1 && y === n - 1) {
    return 1;
  }

  // pre
  // recurse
  const down = walk(x + 1, y, m, n, map, count);
  const right = walk(x, y + 1, m, n, map, count);
  // post
  const sum = down + right;
  map[x][y] = sum;
  count += sum;
  return count;
}
