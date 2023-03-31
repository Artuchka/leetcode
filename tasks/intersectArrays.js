let input1 = [1, 2, 2, 1]
let input2 = [2, 2]

let input3 = [4, 9, 5]
let input4 = [9, 4, 9, 8, 4]

function intersect(nums1, nums2) {
	const map = new Map()

	nums1.forEach((item) => {
		map[item] = map[item] ? map[item] + 1 : 1
	})

	const res = []
	nums2.forEach((item) => {
		if (map[item] && map[item] > 0) {
			res.push(item)
			map[item]--
		}
	})

	console.log({ map })
	console.log({ res })

	return res
}

module.exports = function () {
	console.log(intersect(input1, input2))
}
