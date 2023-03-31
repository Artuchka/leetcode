export default function solve(num) {
	if (num === 1 || num === 4) {
		return true
	}
	let left = 1
	let right = Math.ceil(num / 2)
	let middle = right
	while (right - left > 1) {
		middle = Math.floor((right + left) / 2)
		if (middle * middle < num) {
			left = middle
		} else if (middle * middle > num) {
			right = middle
		} else {
			return true
		}
	}
	return false
}
