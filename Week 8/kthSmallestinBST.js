// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// BST - node.right < node < node.left
// kth smallest - need to find the smallest, then find the kth smallest on the way back
var kthSmallest = function (root, k) {
  let count = 0;
  let smallestK = null;

  function walk(node) {
    // base condition
    if (!node) {
      return 0;
    }

    // pre
    // recurse
    walk(node.left);
    count++;
    // console.log(`smallest ${count}: ${node.val}`)
    if (count === k) {
      smallestK = node.val;
    }
    walk(node.right);
    // post
  }

  walk(root);

  return smallestK;
};
