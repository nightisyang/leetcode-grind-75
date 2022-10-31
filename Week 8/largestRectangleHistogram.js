// https://leetcode.com/problems/largest-rectangle-in-histogram/
// stack
// https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/425762/javascript-brute-force-and-stack-solutions/
// go through a loop till <= heights.length, including because required to look back
// assess maxArea if current height is less than stack height, keep popping until stack prev height is equal or more than current height
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [{ idx: 0, val: 0 }];

  const peek = () => stack[stack.length - 1] || null;

  for (let i = 0; i <= heights.length; i++) {
    const curHeight = heights[i];
    const push = () => stack.push({ idx: i + 1, val: curHeight });

    console.log("currently traversing:", i);
    // if current height is more than previous stacked value, push
    if (curHeight && curHeight > peek().val) {
      push();
      console.log(stack);
    } else {
      // if previous height in stack is more than current height, previous height is the top
      // pop it until stack's last value is less than current height
      // calculate maxArea from current index to peek().idx
      while (peek() && peek().val > (curHeight || 0)) {
        console.log("pop");
        const top = stack.pop();
        const idx = peek() ? peek().idx : 0;
        maxArea = Math.max(maxArea, (i - idx) * top.val);
        console.log(top, stack, idx, maxArea);
      }

      // once done, push curr height into stack and continue
      push();
    }
  }
  return maxArea;
};
