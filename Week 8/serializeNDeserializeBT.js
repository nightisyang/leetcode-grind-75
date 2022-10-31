// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// from solutions
// approach problem breadth first search, go through level by level - push into output array to serialize
// to deserialize, estalish a new TreeNode using the first array element shift(), then assign left and right node until queue is empty
var serialize = function (root) {
  let output = [];
  let queue = root ? [root] : [];

  while (queue.length) {
    let node = queue.shift();

    if (node) {
      output.push(node.val);

      queue.push(node.left || null);
      queue.push(node.right || null);
    } else {
      output.push(null);
    }
  }

  while (output[output.length - 1] === null) {
    output.pop();
  }

  return JSON.stringify(output);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  const arr = JSON.parse(data);

  if (!arr.length) return null;

  const root = new TreeNode(arr.shift());
  const queue = [root];

  while (queue.length) {
    let node = queue.shift(),
      val;

    node.left = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
    node.right = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

//  var serialize = function(root) {
//     const res = [];
//     const queue = root ? [root] : [];
//     while (queue.length) {
//         let node = queue.shift();
//         if (node) {
//             res.push(node.val);
//             queue.push(node.left || null);
//             queue.push(node.right || null);
//         } else {
//             res.push(null);
//         }
//     }
//     while (res[res.length - 1] === null) res.pop();
//     return JSON.stringify(res);
// };

// var deserialize = function(data) {
//     const arr = JSON.parse(data);
//     if (!arr.length) return null;
//     const root = new TreeNode(arr.shift());
//     const queue = [root];
//     while (queue.length) {
//         let node = queue.shift(), val;
//         node.left = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
//         node.right = (val = arr.shift()) || val === 0 ? new TreeNode(val) : null;
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right);
//     }
//     return root;
// };
