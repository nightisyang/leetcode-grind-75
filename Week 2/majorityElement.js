// https://leetcode.com/problems/majority-element/
var majorityElement = function (nums) {
  const len = nums.length;
  const map = {};

  for (let i = 0; i < len; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 0;
    }

    map[nums[i]]++;

    if (map[nums[i]] > len / 2) {
      return nums[i];
    }
  }
};
