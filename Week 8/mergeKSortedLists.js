// https://leetcode.com/problems/merge-k-sorted-lists/
// from solutions
// https://leetcode.com/problems/merge-k-sorted-lists/solutions/10617/javascript-o-n-log-k-time-and-o-k-space-using-min-heap/
class Heap {
  constructor(comparator) {
    this.data = [];
    this.comparator = comparator || ((parent, child) => parent - child);
  }

  get size() {
    return this.data.length;
  }

  bubbleUp(c) {
    if (c === 0) return;
    const p = Math.floor((c + 1) / 2) - 1;
    if (this.comparator(this.data[p], this.data[c]) > 0) {
      [this.data[p], this.data[c]] = [this.data[c], this.data[p]];
    }
    this.bubbleUp(p);
  }

  bubbleDown(p) {
    const c = 2 * (p + 1) - 1;
    if (c >= this.data.length) return;

    const leftDelta = this.comparator(this.data[p], this.data[c]);
    const rightDelta =
      c + 1 >= this.data.length
        ? 0
        : this.comparator(this.data[p], this.data[c + 1]);
    if (leftDelta <= 0 && rightDelta <= 0) return;

    const swapChildIndex = c + (leftDelta <= rightDelta);
    [this.data[p], this.data[swapChildIndex]] = [
      this.data[swapChildIndex],
      this.data[p],
    ];
    this.bubbleDown(swapChildIndex);
  }

  add(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length - 1);
  }

  poll() {
    if (this.size < 2) {
      return this.data.pop();
    }

    // swap the first and last place - taking the min value, rebalance the tree
    [this.data[0], this.data[this.size - 1]] = [
      this.data[this.size - 1],
      this.data[0],
    ];
    const val = this.data.pop();
    this.bubbleDown(0);
    // returns the min linkedList node
    return val;
  }
}

var mergeKLists = function (lists) {
  if (!lists.length) return null;

  const minHeap = new Heap((parent, child) => parent.val - child.val);

  for (let node of lists) {
    // console.log(node)
    if (node) minHeap.add(node);
    // console.log(minHeap.data, minHeap.size)
  }

  const dummy = new ListNode();
  let tail = dummy;
  while (minHeap.size) {
    // console.log(minHeap.size)
    tail.next = minHeap.poll();
    // bring tail forward
    tail = tail.next;

    // if there's a following node, add that into the min heap
    if (tail.next) minHeap.add(tail.next);
  }

  return dummy.next;
};
