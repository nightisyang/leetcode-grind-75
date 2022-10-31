// https://leetcode.com/problems/reverse-linked-list/
// initial intuition is to replace node.val but without an array it's not possible to retrieve the first node val when recursing the last value
// instead, just extend the last node, node.next to previous e.g.
// 1 -> 2 -> 3 -> 4 -> 5
//                     5 -> 4 -> 3 -> 2 -> 1
// new reverse node is returned at the end of each recursion, adding the prev value to node.next
var reverseList = function (head) {
  function walk(node, prev) {
    if (!node) {
      return prev;
    }

    // pre
    // recurse
    let extend = walk(node.next, node);
    // post
    node.next = prev;
    return extend;
  }

  return walk(head, null);
};
