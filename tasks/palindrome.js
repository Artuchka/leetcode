function palindrome(x) {
	let copy = +x
	let res = 0
	let ost = 0
	while (copy > 0) {
		ost = Math.floor(copy % 10)
		copy = Math.floor(copy / 10)
		res = res * 10 + ost
	}

	return res === x
}

export default palindrome
