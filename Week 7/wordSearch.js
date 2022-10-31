// https://leetcode.com/problems/word-search/description/
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const seen = [];

  for (let i = 0; i < board.length; i++) {
    seen.push(new Array(board[0].length).fill(false));
  }

  function walk(x, y, idx) {
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length) {
      // console.log('out of bounds')
      return false;
    }

    // console.log(x, y, idx, word[idx])

    if (seen[x][y]) {
      // console.log('seen')
      return;
    }

    if (board[x][y] === word[idx]) {
      // console.log('found letter, incrementing')
      idx++;
    } else {
      // console.log('did not find letter')
      return;
    }

    if (idx === word.length) {
      return true;
    }

    // pre
    seen[x][y] = true;
    // recurse
    const down = walk(x + 1, y, idx);
    const right = walk(x, y + 1, idx);
    const up = walk(x - 1, y, idx);
    const left = walk(x, y - 1, idx);
    //post
    if (down || right || up || left) {
      // console.log('found path')
      return true;
    }

    // console.log('did not find path')
    seen[x][y] = false;
    return false;
  }
  // return walk(0, 0, 0)

  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[0].length; n++) {
      if (walk(m, n, 0)) {
        return true;
      }
    }
  }

  return false;
};
