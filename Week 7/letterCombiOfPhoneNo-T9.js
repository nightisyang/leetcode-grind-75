// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
// from solution page, clean code dfs
var letterCombinations = function (digits, res = [], level = 0, combo = []) {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // base condition
  if (!digits) {
    return [];
  }

  // base condition
  if (digits.length === level) {
    res.push(combo.join(""));
    return;
  }

  // digits is str, is iterable with level/index "23" - starts with "2" level = 0
  for (const c of map[digits[level]]) {
    // pre
    combo.push(c);
    // recurse
    letterCombinations(digits, res, level + 1, combo);
    // post
    combo.pop();
  }

  return res;
};
