// https://leetcode.com/problems/maximum-depth-of-binary-tree/
var maxDepth = function (root) {
  function walk(node, increment) {
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    let leftDepth = walk(node.left);
    let rightDepth = walk(node.right);
    // post

    // this is the increment
    return Math.max(leftDepth, rightDepth) + 1;
  }

  return walk(root);
};

// var maxDepth = function(root) {
//     if (!root) return 0;

//     let left_depth = maxDepth(root.left);
//     let right_depth = maxDepth(root.right);

//     return Math.max(left_depth, right_depth) + 1;
// };
