let input1 = "babad" // aba bab
let input2 = "cbbd" // bb
let input3 = "mississipi" // ississi
let input4 = "ac" // a c

function longestPalindrom(str) {
	let start = 0
	let end = 0
	for (let i = 0; i < str.length; i++) {
		const len1 = expandFromCenter(str, i, i + 1)
		const len2 = expandFromCenter(str, i, i)

		let len = Math.max(len1, len2)

		if (len > end - start) {
			start = Math.ceil(i - (len - 1) / 2)
			end = Math.floor(i + len / 2)
		}
	}

	function expandFromCenter(s, L, R) {
		while (s[L] === s[R] && L >= 0 && R <= s.length) {
			L--
			R++
		}
		return R - L - 1
	}

	return str.substring(start, end + 1)
}

module.exports = function () {
	console.log(longestPalindrom(input3))
}
