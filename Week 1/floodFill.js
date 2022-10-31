// https://leetcode.com/problems/flood-fill/
var floodFill = function (image, sr, sc, color) {
  const targetColor = image[sr][sc];
  let mLength = image.length;
  let nLength = image[sr].length;
  let seen = [];

  for (let i = 0; i < mLength; i++) {
    seen.push(new Array(nLength).fill(false));
  }

  function walk(imgArr, m, n) {
    // base condition
    if (m < 0 || n < 0 || m >= mLength || n >= nLength) {
      return false;
    }

    if (seen[m][n]) {
      return false;
    }

    seen[m][n] = true;

    if (imgArr[m][n] === targetColor) {
      imgArr[m][n] = color;
    } else {
      return;
    }

    // pre
    // recurse
    const walkLeft = walk(imgArr, m + 1, n);
    const walkDown = walk(imgArr, m, n + 1);
    const walkRight = walk(imgArr, m - 1, n);
    const walkUp = walk(imgArr, m, n - 1);
    // post

    return false;
  }
  walk(image, sr, sc);

  return image;
};
