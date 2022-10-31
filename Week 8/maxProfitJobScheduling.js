// https://leetcode.com/problems/maximum-profit-in-job-scheduling/
// from solution
// top down DP with memo
// https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/733167/thinking-process-top-down-dp-bottom-up-dp/
var jobScheduling = function (startTime, endTime, profit) {
  const jobs = new Array(startTime.length);
  const dp = new Map();

  // make a new array containing start, time and profit
  for (let i = 0; i < jobs.length; i++) {
    jobs[i] = [startTime[i], endTime[i], profit[i]];
  }

  // sort according to start time
  jobs.sort((a, b) => a[0] - b[0]);

  return dfs(0, jobs, dp);
};

function dfs(idx, jobs, dp) {
  // base condition
  if (idx === jobs.length) {
    return 0;
  }

  if (dp.has(idx)) {
    return dp.get(idx);
  }

  // pre
  // given this particular job idx, find the next idx that has a non-overlapping start time
  let next = binarySearch(idx, jobs);

  // recurse
  let inclProfit = jobs[idx][2] + (next === -1 ? 0 : dfs(next, jobs, dp));
  let exclProfit = dfs(idx + 1, jobs, dp);

  // post
  dp.set(idx, Math.max(inclProfit, exclProfit));
  return Math.max(inclProfit, exclProfit);
}

function binarySearch(idx, jobs) {
  let lo = idx + 1;
  let hi = jobs.length - 1;

  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);

    // returns the next job by comparing, mid start time to idx end time
    if (jobs[mid][0] >= jobs[idx][1]) {
      // if start time of prev is also equals or more than idx end time, continue seraching
      if (jobs[mid - 1][0] >= jobs[idx][1]) {
        hi = mid - 1;

        // if prev job start time is less than idx end time, return
      } else {
        return mid;
      }
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}
