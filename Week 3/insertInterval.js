// https://leetcode.com/problems/insert-interval/
var insert = function (intervals, newInterval) {
  // this is the trick, to split array to lesser or more than merge newInterval, then reconstitute result at the end
  let merge = [[], []];
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    let currInterval = intervals[i];
    const [lo, hi] = intervals[i];

    if (hi < newInterval[0]) {
      merge[0].push(currInterval);
    } else if (newInterval[1] < lo) {
      merge[1].push(currInterval);
    } else {
      // reassign newInterval with lowest and highest value if intervals overlap
      newInterval = [
        Math.min(newInterval[0], lo),
        Math.max(newInterval[1], hi),
      ];
    }
  }

  result.push(...merge[0], newInterval, ...merge[1]);
  return result;
};
