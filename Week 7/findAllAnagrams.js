// https://leetcode.com/problems/find-all-anagrams-in-a-string/
// from solutions
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/592384/sliding-window-explanation-javascript-solution-w-comments-faster-than-100/

// previous naive approach had TC O(s^2)
// dumbing down logic to find uniqueChars then following up with starting index, simplified the looping operation.
var findAnagrams = function (s, p) {
  const freqMap = {};
  let result = [];
  let uniqueChar = 0;
  let i = 0;
  let j = 0;

  for (let i = 0; i < p.length; i++) {
    if (!freqMap[p[i]]) {
      freqMap[p[i]] = 0;
      uniqueChar++;
    }

    freqMap[p[i]]++;
  }

  while (j < s.length) {
    // console.log('out', i, j)
    let char = s[j];

    if (freqMap[char] !== undefined) {
      freqMap[char] -= 1;

      if (freqMap[char] === 0) {
        // all occurance of unique letters is found until this end (j)
        uniqueChar--;
      }
    }

    j++;

    while (uniqueChar === 0) {
      // console.log('in', i, j)
      let temp = s[i];

      if (freqMap[temp] !== undefined) {
        // yep, we've found the char, re-instate it for the next find
        freqMap[temp] += 1;

        if (freqMap[temp] > 0) {
          uniqueChar++;
        }
      }

      if (j - i === p.length) {
        result.push(i);
      }

      i++;
    }
  }

  return result;
};
