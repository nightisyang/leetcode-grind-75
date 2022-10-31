// https://leetcode.com/problems/climbing-stairs/
// from solutions, add up two prev steps
var climbStairs = function (n) {
  if (n <= 3) {
    return n;
  }

  let a = [1, 2];

  for (let i = 3; i <= n; i++) {
    console.log(a);
    a = [a[1], a[0] + a[1]];
  }

  return a[1];
};

// def climbStairs(self, n: int) -> int:
//     if n <= 3: return n
//     a = (1, 2)
//     for i in range(3, n+1):
//         a = (a[1], a[0]+a[1])
//     return a[-1]
