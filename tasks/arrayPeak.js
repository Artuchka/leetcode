let nums1 = [0, 1, 0] // 1
let nums2 = [0, 2, 1, 0] // 1
let nums3 = [1] // 0
let nums4 = [1, 2, 3] // 2
let nums5 = [0, 10, 5, 2] // 1

let nums6 = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19] // 2

function peakIndexInMountainArray(arr) {
	let left = 0
	let right = arr.length - 1
	let mid

	while (left < right) {
		mid = Math.floor((left + right) / 2)
		if (arr[mid] < arr[mid + 1]) {
			left = mid + 1
		} else {
			right = mid
		}
	}

	return left
}

module.exports = function () {
	console.log(peakIndexInMountainArray(nums5))
}
