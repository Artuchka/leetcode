let nums1 = [0, 0, 0, 1, 0, 0, 1, 0] // 2
let nums2 = [0, 1] // 1

function maxDistToClosest(seats) {
	const size = seats.length
	let maxDist = 0
	let i = 0
	let emptyInRow = 0

	while (seats[i] === 0) {
		emptyInRow++
		i++
	}

	if (seats[i] === 1 && i < size && emptyInRow > 0) {
		maxDist = Math.max(maxDist, emptyInRow)
	}

	for (; i < size; i++) {
		emptyInRow = 0
		while (seats[i] === 0 && i < size) {
			emptyInRow++
			i++
		}

		if (i === size) {
			maxDist = Math.max(maxDist, emptyInRow)
		} else if (seats[i] === 1 && i < size) {
			maxDist = Math.max(maxDist, Math.floor(emptyInRow / 2 + 0.5))
			emptyInRow = 0
		}
	}

	return maxDist
}

module.exports = function () {
	console.log(maxDistToClosest(nums1))
}
