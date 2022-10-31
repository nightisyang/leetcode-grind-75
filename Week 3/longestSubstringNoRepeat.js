// https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let set = new Set();
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = s[i];

    while (set.has(curr)) {
      set.delete(s[left]);
      left++;
    }

    set.add(curr);
    maxLength = Math.max(maxLength, set.size);
  }

  return maxLength;
};
