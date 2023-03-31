let input1 = [7, 6, 4, 3, 1]
let input2 = [7, 1, 5, 3, 6, 4]
let input3 = "()"
let input4 = "{}"

function maxProfit(prices) {
	let curMax = 0
	let minPrice = prices[0]

	for (let left = 0; left < prices.length; left++) {
		curMax = Math.max(prices[left] - minPrice, curMax)
		minPrice = Math.min(minPrice, prices[left])
	}
	return curMax
}

module.exports = function () {
	console.log(maxProfit(input1))
}
