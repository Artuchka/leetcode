let input1 = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
]
let input2 = [
	[1, 4],
	[4, 5],
]
let input3 = [
	[1, 4],
	[0, 4],
]
let input4 = [
	[1, 4],
	[2, 3],
]

function merge(intervals) {
	intervals = intervals.sort((a, b) => a[0] - b[0])

	let startNow = intervals[0][0]
	let endNow = intervals[0][1]
	let currentIntervalIndex = 1
	const res = []
	while (currentIntervalIndex < intervals.length) {
		const startNext = intervals[currentIntervalIndex][0]
		const endNext = intervals[currentIntervalIndex][1]

		if (endNow >= startNext && endNext >= endNow) {
			endNow = endNext
		} else if (startNext < endNow) {
			currentIntervalIndex++
			continue
		} else {
			res.push([startNow, endNow])
			startNow = startNext
			endNow = endNext
		}
		currentIntervalIndex++
	}

	res.push([startNow, endNow])

	return res
}

module.exports = function () {
	console.log(merge(input4))
}
