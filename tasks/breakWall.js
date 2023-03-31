let input1 = [
	[1, 2, 2, 1],
	[3, 1, 2],
	[1, 3, 2],
	[2, 4],
	[3, 1, 2],
	[1, 3, 1, 1],
]
let input2 = [[1], [1], [1]]
let input3 = [[1, 1], [2], [1, 1]]
let input4 = [[7, 1, 2], [3, 5, 1, 1], [10]]
let input5 = [[2147483646, 1]]

function leastBreaks(wall) {
	const arr = new Map()
	for (let i = 0; i < wall.length; i++) {
		let ind = 0
		for (let j = 0; j < wall[i].length; j++) {
			if (arr.has(ind)) {
				arr.set(ind, arr.get(ind) + 1)
			} else {
				arr.set(ind, 1)
			}
			ind += wall[i][j]
		}
	}

	arr.set(0, 0)
	// console.log({ arr })
	// console.log({ arr: arr.values() })
	return wall.length - Math.max(...arr.values())
}

module.exports = function () {
	console.log(leastBreaks(input5))
}
