export default function solve(n) {
	const arr = []
	for (let i = 0; i <= n; i++) {
		arr.push(getBinaryCount(i))
	}
	return arr
}

function getBinaryCount(num) {
	let count = 0
	let rem
	let i = 1
	while (num != 0) {
		rem = num % 2
		if (rem === 1) count++

		num = parseInt(num / 2)
		i = i * 10
	}

	return count
}
