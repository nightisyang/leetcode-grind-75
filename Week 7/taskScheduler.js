// https://leetcode.com/problems/task-scheduler/
// from solutions
// this is what I was looking for
// https://leetcode.com/problems/task-scheduler/solutions/2260435/javascript-max-heap-hash-map-o-n-2-time-o-n-2-space/
var leastInterval = function (tasks, n) {
  let hashMap = new Map();
  for (let task of tasks) {
    hashMap.set(task, hashMap.get(task) + 1 || 1);
  }

  let maxHeap = new MaxHeap();
  for (let [key, value] of hashMap.entries()) {
    maxHeap.offer(value);
  }

  let queue = [];
  let time = 0;
  while (maxHeap.array.length || queue.length) {
    // console.log('queue:', queue, 'maxHeap:', maxHeap.array)
    let task = maxHeap.array.length ? maxHeap.poll() : null;

    if (task) {
      task--;
      time++;
      if (task !== 0) queue.push([task, time + n]);
    } else {
      time++;
    }

    if (queue.length && queue[0][1] <= time) {
      let temp = queue.shift();
      maxHeap.offer(temp[0]);
    }
  }

  return time;
};

class MaxHeap {
  constructor() {
    this.array = [];
  }

  offer(val) {
    this.array.push(val);
    this.bubbleUp(this.array.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.array[index] > this.array[parent]) {
        this.swap(index, parent);
      }
      index = parent;
    }
    return null;
  }

  poll() {
    this.swap(0, this.array.length - 1);
    let result = this.array.pop();
    this.bubbleDown(0);
    return result;
  }

  bubbleDown(parent) {
    while (true) {
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;
      if (
        (this.array[parent] < this.array[left] && !this.array[right]) ||
        this.array[left] > this.array[right]
      ) {
        this.swap(parent, left);
        parent = left;
      } else if (this.array[parent] < this.array[right]) {
        this.swap(parent, right);
        parent = right;
      } else {
        parent = left;
      }
      if (!this.array[parent]) break;
    }
    return null;
  }

  swap(index1, index2) {
    let temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
    return null;
  }
}
