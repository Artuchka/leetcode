export default function name(nums, k) {
	const n = nums.length
	let sum = 0

	for (let j = 0; j < k; j++) {
		sum += nums[j]
	}
	let maxSum = sum

	for (let i = 1; i < n - k + 1; i++) {
		const newSum = sum - nums[i - 1] + nums[i + k - 1]
		maxSum = Math.max(maxSum, newSum)
		sum = newSum
	}
	return maxSum / k
}
