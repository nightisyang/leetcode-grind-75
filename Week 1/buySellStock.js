// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let lowestVal = Infinity;
  let lowestIdx;
  let highestVal = null;
  let diff = 0;

  for (let i = 0; i < prices.length; i++) {
    // buy at the lowest price, but not on the last day, can't sell the day after
    if (prices[i] < lowestVal) {
      // console.log('lowest', prices[i])
      lowestVal = prices[i];
      // lowestIdx = i

      // if a lower price is found, reset your highestVal
      if (highestVal !== null) {
        highestVal = null;
      }
      // you can only sell after the days you've bought and sell if it's the higest price that you've seen
    } else if (diff < prices[i] - lowestVal) {
      diff = prices[i] - lowestVal;

      // keep track of the max profit, if it's less than max diff, don't change max diff
      // if (prices[i] - lowestVal >= diff) {
      //     // console.log('highest', prices[i])
      //     highestVal = prices[i]
      //     highestIdx = i
      // }
    }
  }

  return diff;
};
