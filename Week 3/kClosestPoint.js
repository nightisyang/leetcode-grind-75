// https://leetcode.com/problems/k-closest-points-to-origin/
var kClosest = function (points, k) {
  function distance(point) {
    return point[0] * point[0] + point[1] * point[1];
  }

  return points
    .sort((a, b) => {
      return distance(a) - distance(b);
    })
    .slice(0, k);
};
