// https://leetcode.com/problems/product-of-array-except-self/
// from solutions page mindblown
const productExceptSelf = function (nums) {
  let output = [];
  let leftMult = 1;
  let rightMult = 1;

  // reassigns previous product multiplication, doesn't include itself
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
    // console.log(output[i], rightMult, nums[i])
  }

  // left side multiplication required to circle back
  for (let j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
    // console.log(output[j], leftMult, nums[j])
  }
  return output;
};
