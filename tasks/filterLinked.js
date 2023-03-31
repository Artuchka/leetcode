// export default function solve(param) {}
function ListNode(val, next) {
	this.val = val === undefined ? 0 : val
	this.next = next === undefined ? null : next
}

function getHead(nums, i) {
	if (i === nums.length - 1) {
		return new ListNode(nums[nums.length - 1], undefined)
	}
	return new ListNode(nums[i], getHead(nums, i + 1))
}

export default function solve(nums, val) {
	const head = getHead(nums, 0)
	const dummy = new ListNode(null, head)

	let current = head
	let prev = dummy

	while (current) {
		if (current.val === val) {
			prev.next = current.next
		} else {
			prev = current
		}
		current = current.next
	}
	return dummy.next
}
