// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let lowestVal = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowestVal) {
      lowestVal = prices[i];
    } else if (maxProfit < prices[i] - lowestVal) {
      maxProfit = prices[i] - lowestVal;
    }
  }

  return maxProfit;
};
