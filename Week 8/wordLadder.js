// https://leetcode.com/problems/word-ladder/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// No idea how this works lol
var ladderLength = function (begin, end, wordList) {
  let set = new Set();
  for (let val of wordList) {
    if (val !== begin) set.add(val);
  }
  if (!set.has(end)) return 0;
  let depth = 0;
  let queue = [begin];
  let size = queue.length;
  let a = "a".charCodeAt(0);
  while (queue.length > 0) {
    depth++;
    while (size > 0) {
      let str = queue.shift();
      for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < 26; j++) {
          let search =
            str.slice(0, i) + String.fromCharCode(a + j) + str.slice(i + 1);
          if (search === str) continue;
          if (search === end) return depth + 1;
          if (set.has(search)) {
            queue.push(search);
            set.delete(search);
          }
        }
      }
      size--;
    }
    size = queue.length;
  }

  return 0;
};
//hit
