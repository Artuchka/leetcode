let nums1 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] // 5
let nums2 = [1, 1, 2] // 2
let nums3 = [1, 1] // 1

function removeDuplicates(arr) {
	let startIndex = 0
	let index = 0
	let ans = []

	while (index < arr.length) {
		while (arr[index] === arr[startIndex] && index < arr.length) {
			index++
		}

		if (arr[index] !== arr[startIndex] && index < arr.length) {
			ans.push(arr[startIndex])
			startIndex = index
		}

		index++
	}

	ans.push(arr[startIndex])

	console.log(ans)
}

module.exports = function () {
	console.log(removeDuplicates(nums2))
}
