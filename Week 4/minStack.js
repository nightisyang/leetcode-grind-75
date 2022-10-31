// https://leetcode.com/problems/min-stack/
var MinStack = function () {
  this.data = [];
  this.min = [];
  this.length = 0;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.length === 0) {
    this.data[0] = val;
    this.min[0] = val;
    this.length++;
  } else {
    this.data[this.length] = val;

    let currMin = this.min[this.length - 1];

    if (currMin > val) {
      this.min[this.length] = val;
    } else {
      this.min[this.length] = currMin;
    }

    this.length++;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  // this.min[this.length - 1] = undefined
  // this.data[this.length - 1] = undefined
  this.length--;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
