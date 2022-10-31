/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode.com/problems/longest-palindromic-substring/description/
// from solution - does the same thing
var longestPalindrome = function (s) {
  const len = s.length;

  let start = 0;

  let end = 0;

  function extendPalindrome(str, e) {
    while (str >= 0 && e < len && s[str] === s[e]) {
      if (e - str > end - start) [start, end] = [str, e];
      str--;

      e++;
    }
  }

  for (let i = 0; i < len; i++) {
    extendPalindrome(i, i); // for odd length
    extendPalindrome(i, i + 1); // for even length
  }

  return s.slice(start, end + 1);
};

// https://leetcode.com/problems/longest-palindromic-substring/solutions/291864/js-solution/
var longestPalindrome = function (s) {
  var str = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      var left = i;
      var right = left + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > str.length) {
        str = s.slice(left + 1, right);
      }
    }
  }
  return str;
};

// my attempt lol
var longestPalindrome = function (s) {
  let palindromeLength = 0;
  let outputPalindrome;

  function palindromeTest(substring) {
    // consider even and odd string lengths
    let substrLength = substring.length;
    let palindromeUntilFalse;

    //even condition
    if (substrLength % 2 === 0) {
      for (let i = 0, j = substrLength - 1; i <= substrLength / 2; i++, j--) {
        palindromeUntilFalse = true;
        if (substring[i] !== substring[j]) {
          if (s.length === 2) {
            palindromeUntilFalse = false;
            return substring[0];
          }
          palindromeUntilFalse = false;
          break;
        }
      }
      if (palindromeUntilFalse) {
        if (substrLength > palindromeLength) {
          palindromeLength = substrLength;
          outputPalindrome = substring;
        }
      }
    } else {
      for (
        let i = 0, j = substrLength - 1;
        i < Math.floor(substrLength / 2);
        i++, j--
      ) {
        palindromeUntilFalse = true;
        if (substring[i] !== substring[j]) {
          palindromeUntilFalse = false;
          break;
        }
      }
      if (palindromeUntilFalse) {
        if (substrLength > palindromeLength) {
          palindromeLength = substrLength;
          outputPalindrome = substring;
        }
      }
    }
  }

  if (s.length <= 1) {
    return s;
  }

  palindromeTest(s);

  if (palindromeLength === s.length) {
    return outputPalindrome;
  }

  // find all combination of a word in sequence
  for (let i = 0; i < s.length; i++) {
    let substring = "";

    substring += s[i];
    for (let j = i + 1; j < s.length; j++) {
      substring += s[j];

      palindromeTest(substring);
    }
  }

  if (palindromeLength === 0) {
    return s[0];
  }

  return outputPalindrome;
};
