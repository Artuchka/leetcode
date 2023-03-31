let input1 = [
	["1", "1", "1", "1", "0"],
	["1", "1", "0", "1", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "0", "0", "0"],
] // 1
let input2 = [
	["1", "1", "0", "0", "0"],
	["1", "1", "0", "0", "0"],
	["0", "0", "1", "0", "0"],
	["0", "0", "0", "1", "1"],
] // 3
let input3 = "aabb" // -1
let input4 = "temka" // 0

let gridHeight = 0
let gridWidth = 0
function numIslands(grid) {
	gridHeight = grid.length - 1
	gridWidth = grid[0].length - 1

	const coloredGrid = Array(grid.length)
		.fill(0)
		.map(() => Array(grid[0].length).fill(-1))

	const stackToBe = [[0, 0]]

	while (stackToBe.length > 0) {
		const cell = stackToBe.pop()
		const x = cell[0]
		const y = cell[1]

		coloredGrid[y][x] = 1

		for (let dx = -1; dx <= 1; dx++) {
			for (let dy = -1; dy <= 1; dy++) {
				const newX = dx + x
				const newY = dy + y
				if (
					isValidCell(newX, newY) &&
					!beenHere(coloredGrid, newX, newY)
				) {
					stackToBe.push([newX, newY])
				}
			}
		}
	}

	console.log(coloredGrid)
}

function beenHere(grid, x, y) {
	return grid[y][x] >= 0
}
function isValidCell(x, y) {
	return 0 <= y && y <= gridHeight && 0 <= x && x <= gridWidth
}

module.exports = function () {
	console.log(numIslands(input1))
}
