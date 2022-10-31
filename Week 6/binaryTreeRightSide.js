// https://leetcode.com/problems/binary-tree-right-side-view/
// from solutions
// https://leetcode.com/problems/binary-tree-right-side-view/solutions/382850/simple-javascript-bfs-solution-using-queue/
var rightSideView = function (root) {
  const result = [];
  const queue = [];

  if (root === null) return result;

  queue.push(root);
  while (queue.length !== 0) {
    let size = queue.length;
    // console.log(queue)
    for (let i = 0; i < size; i++) {
      let n = queue.shift();
      // only pushing, right node [left, right] in queue, or if it's the only node, e.g index 0
      if (i === size - 1) result.push(n.val);
      if (n.left !== null) queue.push(n.left);
      if (n.right !== null) queue.push(n.right);
    }
  }

  return result;
};
