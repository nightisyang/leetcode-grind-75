// https://leetcode.com/problems/sort-colors/
// 0 red
// 1 white
// 2 blue
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // i only serves to indicate end of j for loop
    // first j for loop when place largest value at the end, therefore i--
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
};
