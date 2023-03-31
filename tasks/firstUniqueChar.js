let input1 = "leetcode" // 0
let input2 = "loveleetcode" // 2
let input3 = "aabb" // -1
let input4 = "temka" // 0

function firstUniqueChar(str) {
	const map = {}

	for (let i = 0; i < str.length; i++) {
		map[str.charAt(i)] = map[str.charAt(i)] ? map[str.charAt(i)] + 1 : 1
	}
	for (let i = 0; i < str.length; i++) {
		if (map[str.charAt(i)] === 1) {
			return i
		}
	}

	return -1
}

module.exports = function () {
	console.log(firstUniqueChar(input4))
}
