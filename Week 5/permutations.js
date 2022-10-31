// https://leetcode.com/problems/permutations/description/
// from solutions
// https://leetcode.com/problems/permutations/solutions/685868/dfs-backtracking-python-java-javascript-picture/
// good illustration on how to approach the problem
// time O(N^N), has to find every permutation
var permute = function (nums) {
  let res = [];
  dfs(nums, [], Array(nums.length).fill(false), res);
  return res;
};

function dfs(nums, path, used, res) {
  // console.log(path)
  if (path.length == nums.length) {
    // make a deep copy since otherwise we'd be append the same list over and over
    res.push(Array.from(path));
    return;
  }
  for (let i = 0; i < nums.length; i++) {
    // skip used nums
    if (used[i]) continue;
    // add letter to permutation, mark letter as used
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, path, used, res);
    // remove letter from permutation, mark letter as unused
    path.pop();
    used[i] = false;
  }
}
