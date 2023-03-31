let nums1 = [
	[1, 1, 1],
	[1, 0, 1],
	[1, 1, 1],
]
let nums2 = [
	[0, 1, 2, 0],
	[3, 4, 5, 2],
	[1, 3, 1, 5],
]
let nums3 = [[1], [0]]

function setZeroes(matrix) {
	const rowsAmount = matrix.length
	const colsAmount = matrix[0].length
	let firstColumnHasZero = false
	// console.table(matrix)

	for (let i = 0; i < rowsAmount; i++) {
		if (matrix[i][0] === 0) {
			firstColumnHasZero = true
		}
		for (let j = 1; j < colsAmount; j++) {
			const el = matrix[i][j]
			if (el === 0) {
				matrix[i][0] = 0 // marking row for zero
				matrix[0][j] = 0 // marking column for zero
			}
		}
	}
	// console.table(matrix)

	for (let i = 1; i < colsAmount; i++) {
		if (matrix[0][i] === 0) {
			for (let j = 0; j < rowsAmount; j++) {
				matrix[j][i] = 0
			}
		}
	}
	for (let i = 0; i < rowsAmount; i++) {
		if (matrix[i][0] === 0) {
			for (let j = 0; j < colsAmount; j++) {
				matrix[i][j] = 0
			}
		}
	}

	if (firstColumnHasZero) {
		for (let i = 0; i < rowsAmount; i++) {
			matrix[i][0] = 0
		}
	}

	console.table(matrix)
	return matrix
}

module.exports = function () {
	console.log(setZeroes(nums3))
}
