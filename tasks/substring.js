export default function solve(s, t) {
	if (s === "") return true
	s = s.split("")
	for (let i = 0; i < t.length; i++) {
		if (t[i] === s[0]) {
			s.shift()
			if (s.length === 0) return true
		}
	}

	return false
}
