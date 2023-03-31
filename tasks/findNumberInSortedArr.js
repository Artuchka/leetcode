let nums1 = [4, 5, 6, 7, 0, 1, 3],
	target1 = 0
let nums2 = [4, 5, 6, 7, 0, 1, 2],
	target2 = 3
let nums3 = [1],
	target3 = 1
let nums4 = [1, 2, 3],
	target4 = 4

let nums5 = [4, 5, 6, 7, 8, 1, 2, 3],
	target5 = 8

function search(arr, target) {
	const offset = getOffset(arr)
	console.log({ offset })
	const res1 = findNumber(arr, target, 0, offset)
	const res2 = findNumber(arr, target, offset, arr.length)

	if (res1 !== -1) {
		return res1
	}
	return res2
}

function getOffset(arr) {
	let left = 0
	let right = arr.length - 1

	if (arr[right] < arr[right - 1]) {
		return right
	} else if (
		(arr[right] > arr[right - 1] && arr[0] < arr[right]) ||
		right === 0
	) {
		return 0
	}

	let mid
	while (right - left > 1 && arr[left] >= arr[right]) {
		mid = Math.floor((left + right) / 2)
		if (arr[mid] <= arr[left]) {
			right = mid
		} else if (arr[mid] > arr[right]) {
			left = mid
		}
	}

	return mid
}
function findNumber(arr, target, start, end) {
	let left = start
	let right = end

	console.log({ start, end })
	if (start === end && arr[start] === target) {
		return start
	}

	let mid = Math.floor((left + right) / 2)
	while (right - left > 1) {
		mid = Math.floor((left + right) / 2)
		console.log({ mid })
		if (arr[mid] === target) {
			return mid
		} else if (arr[mid] > target) {
			right = mid
		} else if (arr[mid] < target) {
			left = mid
		}
	}

	if (arr[mid - 1] === target) {
		return mid - 1
	}
	if (arr[mid] === target) {
		return mid
	}

	return -1
}

module.exports = function () {
	console.log(search(nums5, target5))
}
