// https://leetcode.com/problems/add-binary/
// value can only be 1, 0, if sum is 2, then move value forward
var addBinary = function (a, b) {
  const arr = [];
  const longestArr = a.length > b.length ? a.length : b.length;
  const aEnd = a.length - 1;
  const bEnd = b.length - 1;
  let bringForward = 0;

  for (let i = 0; i < longestArr; i++) {
    const aVal = a[aEnd - i] ? Number(a[aEnd - i]) : 0;
    const bVal = b[bEnd - i] ? Number(b[bEnd - i]) : 0;
    const sum = (aVal + bVal).toString();
    addBringForward(sum);
  }

  function addBringForward(x) {
    if (bringForward === 0) {
      if (x === "2") {
        arr.push("0");
        bringForward = 1;
      } else {
        arr.push(x);
      }
    } else {
      if (x === "0") {
        bringForward = 0;
        arr.push("1");
      } else if (x === "1") {
        bringForward = 1;
        arr.push("0");
      } else if (x === "2") {
        bringForward = 1;
        arr.push("1");
      }
    }
  }

  if (bringForward > 0) {
    arr.push(bringForward.toString());
  }

  return arr.reverse().join("");
};
