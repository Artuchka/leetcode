export default function solve(s) {
	let cnt = 0
	let cnt2 = 0
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "A") {
			cnt++
			if (cnt === 2) return false
		}
		if (s[i] === "L") {
			cnt2 += 1
			if (cnt2 === 3) return false
		} else {
			cnt2 = 0
		}
	}

	return true
}
