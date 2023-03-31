export default function solve(nums) {
	const ans = nums.sort((a, b) => {
		if (a === 0) return 1
		if (b === 0) return -1
		return 0
	})
	return ans
}
