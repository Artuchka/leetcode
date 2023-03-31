let input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let input2 = [1, 1]
let input3 = [4, 3, 2, 1, 4]
let input4 = [1, 2, 1]

function maxArea(height) {
	let max = 0
	let left = 0
	let right = height.length - 1
	while (left < right) {
		const areaCalced =
			(right - left) * Math.min(height[left], height[right])
		max = Math.max(max, areaCalced)
		if (height[left] >= height[right]) {
			right--
		} else {
			left++
		}
	}

	return max
}

module.exports = function () {
	console.log(maxArea(input1))
}
