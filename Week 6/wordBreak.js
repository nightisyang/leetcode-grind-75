// https://leetcode.com/problems/word-break/
// from solutions
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const words = new Set(wordDict);
  const starts = new Set([0]);

  for (const start of starts) {
    for (const word of words) {
      const end = start + word.length;
      // we are slicing the word from s and check if that sliced word is exist in wordDict
      // it could be the current word or it could be the other word which has same length of current word
      // either way, we admit that the current starting index to the index of word length exist
      // so now we want to add the next starting index which is 'end'
      // we repeat this process until the last index of s
      // if we reached to last index of s, that means that we checked that every sliced word exist in wordDict
      // until the last index of s
      // this will conclude that the s has every word from wordDict
      if (words.has(s.slice(start, end))) starts.add(end);
    }
  }
  return starts.has(s.length);
};

// what if we add the same length of index again and again?
// it will repeat the same starting index next time again and again.
// To prevent the repetition, we used a Set() so that even after we add the new start index
// it will not loop again unless if we never been to that starting index
