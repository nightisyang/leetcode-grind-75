// https://leetcode.com/problems/merge-intervals/
function merge(intervals) {
  if (!intervals.length) {
    return intervals;
  }

  // if start interval isn't the same, sort using the start interval, otherwise sort using end interval
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  //   console.log(intervals)

  var prev = intervals[0];
  var res = [prev];

  for (var curr of intervals) {
    // if start of current interval is smaller than previous end
    if (curr[0] <= prev[1]) {
      // merge to the largest end interval either previous or current
      prev[1] = Math.max(prev[1], curr[1]);

      // else push and reassign prev and curr
    } else {
      res.push(curr);
      prev = curr;
    }
  }

  return res;
}
