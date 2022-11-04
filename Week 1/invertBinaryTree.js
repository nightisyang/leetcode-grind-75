// https://leetcode.com/problems/invert-binary-tree/
// dfs
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
// bfs
const invertTree = (root) => {
  if (!root) return null;
  let cur = [root];

  while (cur.length) {
    const next = [];
    for (const node of cur) {
      node.left && next.push(node.left);
      node.right && next.push(node.right);
      [node.left, node.right] = [node.right, node.left];
    }
    cur = next;
  }
  return root;
};
