export default function solve(root) {
	const arr = []
	const levels = BFS(root, 0, arr)
	for (let i = 0; i < levels.length; i++) {
		const isSymmArr = checkArr(levels[i])
		if (!isSymmArr) return false
	}
	console.log({ levels })
	return true
}

function BFS(root, level, arr) {
	if (!arr?.[level]) {
		arr[level] = [root?.val]
	} else {
		arr[level].push(root?.val)
	}
	if (!root) return false
	BFS(root.left, level + 1, arr)
	BFS(root.right, level + 1, arr)
	return arr
}

function checkArr(arr) {
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		if (arr[left] !== arr[right]) return false
		left++
		right++
	}
	return true
}
