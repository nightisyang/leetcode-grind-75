// https://leetcode.com/problems/combination-sum/
// from solutions
// https://leetcode.com/problems/combination-sum/solutions/16757/javascript-solution-with-backtracking/
var combinationSum = function (candidates, target) {
  const buffer = [];
  const result = [];

  function walk(idx, target) {
    // console.log(buffer)
    // base condition
    if (target === 0) {
      // console.log('found combination')
      // if recursion results in target === 0, then take this combination and push into result
      return result.push(buffer.slice());
    }

    if (target < 0) {
      // console.log('target < 0')
      return;
    }

    if (idx === candidates.length) {
      // console.log('end of arr length')
      return;
    }
    // pre
    // start recursion with this number, if resulting target === 0, then buffer --> result
    buffer.push(candidates[idx]);
    // recurse

    // start recursion with this idx (itself), with after deducting target, find other combinations
    walk(idx, target - candidates[idx]);

    // if code reaches here, then combination < 0 or end of arr, pop it out from buffer and...
    buffer.pop();

    // start searching in the next idx
    walk(idx + 1, target);
    // post
  }

  walk(0, target);

  return result;
};
