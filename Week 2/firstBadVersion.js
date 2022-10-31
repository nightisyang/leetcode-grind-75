// https://leetcode.com/problems/first-bad-version/
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let firstBadVersion = null;
    let lo = 0;
    let hi = n;

    if (n === 1) {
      return n;
    }

    if (n < 10) {
      for (let i = n; i > 0; i--) {
        if (isBadVersion(i)) {
          firstBadVersion = i;
        }
      }
    } else {
      while (lo <= hi) {
        let mid = Math.floor(lo + (hi - lo) / 2);

        if (isBadVersion(mid) && !isBadVersion(mid - 1)) {
          return mid;
        }

        if (isBadVersion(mid)) {
          hi = mid - 1;
        }

        if (!isBadVersion(mid)) {
          lo = mid + 1;
        }
      }
    }
    return firstBadVersion;
  };
};
