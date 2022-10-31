// https://leetcode.com/problems/subsets/description/
// from solutions
let result;
var subsets = function (nums) {
  result = []; // no need this if function is executed once
  recursive(0, nums, []);
  return result;
};

var recursive = function (start, nums, subset) {
  //   console.log(subset)
  result.push(subset.slice(0));

  for (let i = start; i < nums.length; i++) {
    subset.push(nums[i]);
    // console.log(subset)
    recursive(i + 1, nums, subset);
    subset.pop();
    // console.log(subset)
  }
};
