// https://leetcode.com/problems/container-with-most-water/
var maxArea = function (height) {
  let output = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;

    // choose the max, either from output of product of min height * width
    output = Math.max(output, Math.min(height[left], height[right]) * width);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  // console.log(output)
  return output;
};
