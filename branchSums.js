class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function branchSums(root) {
	let total = [];
}
//create helper function for recursive call
function calculateBranchSums(node, runningSum, total) {
	let accum = runningSum + node.value;
}
