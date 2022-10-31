// https://leetcode.com/problems/binary-tree-level-order-traversal/
var levelOrder = function (root) {
  let output = [];

  if (!root) {
    return [];
  }

  function walk(node, count) {
    // base condition
    if (!node) {
      return;
    }

    // pre
    if (!output[count]) {
      output.push([]);
    }
    // push into output array of the same level
    output[count].push(node.val);

    // recurse
    walk(node.left, count + 1);
    walk(node.right, count + 1);
    // post
  }

  walk(root, 0);
  return output;
};
