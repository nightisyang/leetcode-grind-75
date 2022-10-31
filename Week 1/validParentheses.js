// https://leetcode.com/problems/valid-parentheses/
var isValid = function (s) {
  // const openingTags = ["(", "{", "["]
  const closingTagsMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  let len = s.length;
  if (len % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < len; i++) {
    if (closingTagsMap[s[i]]) {
      stack.push(s[i]);
      // console.log(stack)
    } else {
      if (s[i] !== closingTagsMap[stack.pop()]) {
        return false;
      }
    }
  }

  return !stack.length;
};
