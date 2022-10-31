// https://leetcode.com/problems/longest-palindrome/
// define what constitues a palindrom
// even length palindrome, all letters have even pairs
// odd length palindrome, one letter is odd 1, 3, 5.. the others must be even
// add letters from string into a map, to build longest palindrome, take all even numbered letters and add the longest odd letter if available
// omit 1 character from odd length and it becomes even
// from solutions
var longestPalindrome = function (s) {
  const map = new Map();
  let count = 0;
  let isAnySingleDigit = false;

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i]) + 1 || 1);
  }
  // console.log(map)

  for (const [k, v] of map) {
    // does everything in one pass, if odd then deduct v % 2 (essentially - 1)
    count += v - (v % 2);

    // if there's an odd letter, reassign as true
    if (v % 2 !== 0) {
      isAnySingleDigit = true;
    }
  }

  // add one if there's odd letter
  if (isAnySingleDigit) count += 1;

  return count;
};

// naive approach
// TLE
/*
var longestPalindrome = function(s) {

    const map = new Map()
    let evenSum = 0;
    let largestOdd = 0;
    let largestOddLetter = null


    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1)
    }
    // console.log(map)

    // first pass to add up all the even numbers and obtain largestOdd
    for(const [k, v] of map) {
        if(v % 2 === 0) {
            evenSum += v
        } else {
            if(v > largestOdd) {
                largestOdd = v
                largestOddLetter = k
            } 
        }
    }

    // second pass to add up all the odd numbers - 1 as even excluding largestOdd
    for (const [k, v] of map) {
        if(v % 2 !== 0 && k !== largestOddLetter) {
            evenSum += v - 1
        }
    }
    // console.log(evenSum, largestOdd)

    return (evenSum + largestOdd)
    

};
*/
