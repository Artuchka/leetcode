// export default function solve(param) {}
export default function solve(nums) {
	const map = {}

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i]
		if (map[element]) {
			map[element] += 1
			return true
		} else {
			map[element] = 1
		}
	}

	return false
}
