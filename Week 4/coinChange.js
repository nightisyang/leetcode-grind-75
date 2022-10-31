// https://leetcode.com/problems/coin-change/
// form solutions
// dynamic programming
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin of coins) {
    // console.log('looping through:', coin)
    for (let i = coin; i <= amount; i++) {
      // console.log(i, dp[i], dp[i - coin])
      // console.log('finding number of coins required to arrive at sum, interatively')
      // calculating number of coins required from 0 to amount.
      // we're currently at i = 2, coins[2] = 5, are there coins to make up 6, and is this value smaller than the current amount of coins?
      // add one coin to the number of coins that make up 6.
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  // console.log(dp)
  return dp[amount] === Infinity ? -1 : dp[amount];
};
