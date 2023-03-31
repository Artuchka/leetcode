let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 1
let nums2 = [0, 2, 1, 0] // 1
let nums3 = [1] // 0
let nums4 = [1, 2, 3] // 2
let nums5 = [0, 10, 5, 2] // 1

let nums6 = [24, 69, 100, 99, 79, 78, 67, 36, 26, 19] // 2

function shuffle(arr) {
	const ans = [...arr]
	let n = ans.length
	for (let i = 0; i < n; i++) {
		const ind = Math.floor(Math.random() * n)

		const temp = ans[ind]
		ans[ind] = ans[i]
		ans[i] = temp
	}

	return ans
}

module.exports = function () {
	for (let i = 0; i < 10; i++) {
		console.log(shuffle(nums1))
	}
}
