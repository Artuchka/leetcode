export default function solve(node) {
	return helper(root, [])
}

function helper(node, arr) {
	if (node) {
		helper(node.right, arr)
		helper(node.left, arr)
		arr.push(node.val)
	}
	return arr
}
