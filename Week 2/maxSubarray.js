// https://leetcode.com/problems/maximum-subarray/
var maxSubArray = function (nums) {
  let prev = 0;
  let max = -Infinity;

  for (i = 0; i < nums.length; i++) {
    let curr = nums[i];

    console.log("curr:", nums[i], "prev:", prev, "max:", max);

    // which is the larger value, current or current + previous sum (previous + curr ?? inception), prev largest
    prev = Math.max(curr + prev, curr);

    // if the previous largest is larger than recorded max, replace, if it's lesser just retain max
    max = Math.max(prev, max);
  }

  return max;
};
