// https://leetcode.com/problems/ransom-note/
var canConstruct = function (ransomNote, magazine) {
  const ransomArr = ransomNote.split("");
  const magazineArr = magazine.split("");
  let ransomObj = {};
  let result = true;

  for (let i = 0; i < magazineArr.length; i++) {
    const letter = magazineArr[i];

    if (!ransomObj[letter]) {
      ransomObj[letter] = 1;
      continue;
    }

    ransomObj[letter] += 1;
  }

  for (let i = 0; i < ransomArr.length; i++) {
    const letter = ransomArr[i];

    if (!ransomObj[letter]) {
      result = false;
      break;
    }

    if (ransomObj[letter] > 0) {
      ransomObj[letter] -= 1;
    }
  }
  return result;
};
