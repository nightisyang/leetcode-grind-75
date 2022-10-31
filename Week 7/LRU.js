const LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Set();
  this.obj = new Map();
};

LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1;
  } else {
    this.cache.delete(key);
    this.cache.add(key);
  }
  return this.obj.get(key);
};

LRUCache.prototype.put = function (key, value) {
  if (!this.cache.has(key)) {
    this.cache.add(key);
  } else {
    this.cache.delete(key);
    this.cache.add(key);
  }
  if (this.cache.size > this.capacity) {
    let [first] = this.cache;
    this.obj.delete(first);
    this.cache.delete(first);
  }
  this.obj.set(key, value);
};
