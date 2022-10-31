// https://leetcode.com/problems/binary-search/
var search = function (nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  if (nums.length === 1 && nums[0] === target) {
    return 0;
  }

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      hi = mid - 1;
    }

    if (nums[mid] < target) {
      lo = mid + 1;
    }
  }

  return -1;
};
