// https://leetcode.com/problems/linked-list-cycle/
var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

// public class Solution { //java version
//     public boolean hasCycle(ListNode head) {
//         ListNode fast = head;
//         ListNode slow = head;
//         while(fast != null && fast.next != null){
//             fast = fast.next.next; //2 times
//             slow = slow.next;
//             if(fast == slow) return true;
//         }
//         return false;
//     }
// }
