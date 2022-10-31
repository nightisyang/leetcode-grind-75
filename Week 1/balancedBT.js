// https://leetcode.com/problems/balanced-binary-tree/
var isBalanced = function (root) {
  let result = true;

  if (!root) {
    return true;
  }

  function walkMetrics(node) {
    // base condition
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    let walkLeft = walkMetrics(node.left);
    let walkRight = walkMetrics(node.right);

    // post
    if (Math.abs(walkLeft - walkRight) > 1) {
      result = false;
    }

    return 1 + Math.max(walkLeft, walkRight);
  }

  walkMetrics(root);

  return result;
};
