// https://leetcode.com/problems/partition-equal-subset-sum/
// from solution
// https://leetcode.com/problems/partition-equal-subset-sum/solutions/462699/whiteboard-editorial-all-approaches-explained/
var canPartition = (A) => {
  let totalSum = A.reduce((acc, curr) => acc + curr);
  if (totalSum % 2) return false;

  const target = totalSum / 2;
  const memo = new Set([0]);

  for (let number of A) {
    let possibleSums = Array.from(memo);
    console.log(possibleSums);

    for (let possibleSum of possibleSums) {
      console.log(number);
      memo.add(possibleSum + number);
    }
    console.log(memo);
  }
  return memo.has(target);
};

/*
var canPartition = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    const total = sorted.reduce((prev, curr) => prev + curr)
    let largestInt = sorted[sorted.length - 1]
    let sumOfSmallerInt = total - largestInt
    // let i = 0
    let j = sorted.length - 1

    if(!nums || nums.length === 1) {
        return false
    }

    while (j > 0) {
        // let tempSum = 0

        if(sumOfSmallerInt === largestInt) {
            return true
        }

        if(sumOfSmallerInt < largestInt) {
            return false
        }

        if(sumOfSmallerInt > largestInt) {
            // i++
            j--
            largestInt = largestInt + sorted[j]
            sumOfSmallerInt = total - largestInt
        }
    }

};
*/
