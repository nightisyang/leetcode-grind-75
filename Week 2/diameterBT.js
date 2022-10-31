// https://leetcode.com/problems/diameter-of-binary-tree/

var diameterOfBinaryTree = function (root) {
  let maxDistance = 0;

  function walk(node) {
    // base condition
    if (!node) {
      return 0;
    }

    const leftWalk = walk(node.left);
    const rightWalk = walk(node.right);
    maxDistance = Math.max(leftWalk + rightWalk, maxDistance);
    return Math.max(leftWalk + 1, rightWalk + 1);
  }

  walk(root);
  return maxDistance;
};
