let input1 = "({[})"
let input2 = "(}"
let input3 = "()"
let input4 = "{}"

function isValid(str) {
	const stack = []
	const opening = ["(", "{", "["]
	const closing = {
		"(": ")",
		"{": "}",
		"[": "]",
	}
	for (let i = 0; i < str.length; i++) {
		const cur = str[i]
		if (opening.includes(cur)) {
			stack.push(cur)
			continue
		}
		const last = stack.pop()
		if (cur !== closing[last]) {
			return false
		}
	}

	if (stack.length > 0) {
		return false
	}

	return true
}

module.exports = function () {
	console.log(isValid(input1))
}
