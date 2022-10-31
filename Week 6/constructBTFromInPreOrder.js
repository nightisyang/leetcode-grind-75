// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// from solutions, much clearer
var buildTree = function (preorder, inorder) {
  const inorderMap = {};
  let currPreorder = 0;

  inorder.forEach((el, idx) => {
    if (!(el in inorderMap)) {
      inorderMap[el] = idx;
    }
  });

  console.log(inorderMap);

  function dfs(left, right) {
    if (left > right) return null;

    // take currVal

    const currVal = preorder[currPreorder];
    currPreorder++;
    //   console.log(currVal, `indexOf ${preorder.indexOf(currVal)}, ${currPreorder}`)
    const node = new TreeNode(currVal);

    // find idx in inordermap and assign - 1 and + 1 for left and right node respectively
    node.left = dfs(left, inorderMap[currVal] - 1);
    node.right = dfs(inorderMap[currVal] + 1, right);

    return node;
  }

  return dfs(0, inorder.length - 1);
};
