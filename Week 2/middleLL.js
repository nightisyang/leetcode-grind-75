// https://leetcode.com/problems/middle-of-the-linked-list/
var middleNode = function (head) {
  let stack = [];
  let cur = head;

  while (cur) {
    stack.push(cur);
    cur = cur.next;
  }

  let mid = Math.floor(stack.length / 2);

  return stack[mid];
};
