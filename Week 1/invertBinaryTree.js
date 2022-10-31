// https://leetcode.com/problems/invert-binary-tree/
var invertTree = function (root) {
  function walk(node) {
    // base condition
    if (!node) {
      return;
    }

    // pre
    // console.log(node.val)
    // recurse
    walk(node.left);
    walk(node.right);
    // post
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  walk(root);

  return root;
};
