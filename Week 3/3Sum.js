// from solution
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const len = nums.length;
  const result = [];

  if (len === 3) {
    const sum = nums[0] + nums[1] + nums[2];
    if (sum === 0) {
      result.push([nums[0], nums[1], nums[2]]);
      return result;
    }
  }

  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > 0) {
      return result;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1, k = len - 1; j < k; ) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);

        j++;
        k--;

        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else if (sum > 0) {
        k--;
      } else {
        j++;
      }
    }
  }

  return result;
};
