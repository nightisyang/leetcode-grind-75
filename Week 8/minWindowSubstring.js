// https://leetcode.com/problems/minimum-window-substring/
// from solutions
// https://leetcode.com/problems/minimum-window-substring/solutions/26808/here-is-a-10-line-template-that-can-solve-most-substring-problems/
var minWindow = function (s, t) {
  let counter = t.length;
  let shortestSubstring = "";
  const tMap = {};
  let start = 0;
  let end = 0;
  let minStart = 0;
  let minLen = Infinity;
  let size = s.length;

  for (let i = 0; i < t.length; i++) {
    if (!tMap[t[i]]) {
      tMap[t[i]] = 0;
    }
    tMap[t[i]] += 1;
  }

  while (end < size) {
    if (tMap[s[end]] > 0) {
      counter--;
    }

    tMap[s[end]]--;
    end++;
    console.log(tMap);
    while (counter === 0) {
      if (end - start < minLen) {
        minStart = start;
        minLen = end - start;
      }

      tMap[s[start]]++;
      console.log(tMap);
      if (tMap[s[start]] > 0) {
        counter++;
      }
      start++;
    }
  }
  console.log(tMap);
  if (minLen !== Infinity) {
    shortestSubstring = s.substring(minStart, minStart + minLen);
  }

  return shortestSubstring;
};

// naive approach
/*
var minWindow = function(s, t) {
    // find t substring in s, with the least different amount of letters
    // "ADOBECODEBANC"
    // "ADOBEC"
    // "BECODEBA"
    // "CODEBA"
    // "BANC"
    let shortestSubstring = "";
    let temp = ""
    let shortestSubsLength = s.length;
    let i = 0;
    let j = 0;
    let noOfSubFound = 0

    if(s === t) {
        return s;
    }

    if (t.length > s.length) {
        return shortestSubstring;
    }

    const tArr = t.split("");
    const tMapSeenTemplate = {}

    for (let i = 0; i < t.length; i++) {
        if(!tMapSeenTemplate[t[i]]) {
            tMapSeenTemplate[t[i]] = []
        }
        tMapSeenTemplate[t[i]].push(false)
    }
    
    while (i < s.length) {
        const tMapSeen = Object.assign({}, tMapSeenTemplate);

        while(!tArr.includes(s[i]) && i < s.length) {
            i++
        }

        if (tMapSeen[s[i]] && tMapSeen[s[i]].includes(false)) {

            tMapSeen[s[i]][tMapSeen[s[i]].indexOf(false)] = true
            temp += s[i]
            noOfSubFound += 1
            j = i + 1

            // extend j++ until all other characters are found
            while(noOfSubFound < t.length && j < s.length) {

                // console.log(j, s[j])
                
                while(!tMapSeen[s[j]] && j < s.length || !tMapSeen[s[j]]?.includes(false) && j < s.length) {
                    // console.log('j pointer:', j, s[j], 'increment')
                    temp += s[j]
                    j++
                }

                if(tMapSeen[s[j]] && tMapSeen[s[j]].includes(false)) {
                    // console.log('j pointer:', j, s[j], 'found')
                    temp += s[j]
                    tMapSeen[s[j]][tMapSeen[s[j]].indexOf(false)] = true
                    noOfSubFound += 1
                }
                    // console.log(temp, tMapSeen)
                    j++
                    // console.log(j)
            }

            // when all 3 chacters are found, take the substring from s[i] to s[j], get length, and if length is smaller prev substring, update
            if(noOfSubFound === t.length) {
                if (temp.length <= shortestSubsLength) {
                    shortestSubsLength = temp.length
                    shortestSubstring = temp
                    // console.log('new result:', shortestSubstring)
                }
            }

                // after updating, reset everything as false, i++ will increment in the next loop and find the next t char
            noOfSubFound = 0;
            temp = "";
        }
        i++
    }

    return shortestSubstring
    
};
*/
