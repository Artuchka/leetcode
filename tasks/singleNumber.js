let nums1 = [2, 2, 1] // 1
let nums2 = [4, 1, 2, 1, 2] // 4

function singleNumber(nums) {
	// possible: hasmap, set, math
	const set = new Set()
	let sum = 0
	let totalSum = 0
	for (let i = 0; i < nums.length; i++) {
		const el = nums[i]
		if (!set.has(el)) {
			set.add(el)
			sum += el
		}
		totalSum += el
	}

	const num = sum * 2 - totalSum

	return num
}

module.exports = function () {
	console.log(singleNumber(nums2))
}
