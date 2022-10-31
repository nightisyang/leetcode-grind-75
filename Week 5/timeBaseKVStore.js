// https://leetcode.com/problems/time-based-key-value-store/
var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, []);
  }

  this.map.get(key).push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) {
    return "";
  }

  if (timestamp < this.map.get(key)[0][0]) {
    return "";
  }

  let left = 0;
  let right = this.map.get(key).length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (this.map.get(key)[mid][0] <= timestamp) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  if (right > left) {
    return "";
  }

  return this.map.get(key)[right - 1][1];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
