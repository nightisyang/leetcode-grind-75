// https://leetcode.com/problems/validate-binary-search-tree/
var isValidBST = function (root) {
  function walk(root, minVal, maxVal) {
    // base condition
    if (!root) {
      return true;
    }

    // pre
    if (root.val <= minVal || root.val >= maxVal) {
      return false;
    }
    // recurse

    // left node can't be larger than parent node
    // right node must be larger than parent node
    return (
      walk(root.left, minVal, root.val) && walk(root.right, root.val, maxVal)
    );
    // post
  }

  return walk(root, -Infinity, Infinity);
};
