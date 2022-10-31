// https://leetcode.com/problems/two-sum/

var twoSum = function (nums, target) {
  let map = new Map();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    // find complement for nums[i]
    if (map.has(nums[i])) {
      result.push(i, map.get(nums[i]));
      return result;
    } else {
      map.set(complement, i);
    }
  }
};
