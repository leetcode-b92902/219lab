/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let cost = 0;
    const traverse = (node) => {
        if (node == null) {
            return 0;
        }
        const leftDelta = traverse(node.left);
        const rightDelta = traverse(node.right);
        cost += Math.abs(leftDelta) + Math.abs(rightDelta);
        return node.val + leftDelta + rightDelta - 1;
    };
    traverse(root);

    return cost;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function buildTree(values, index) {
    if (values[index] == null) {
        return null;
    }
    const node = new TreeNode(values[index]);
    node.left = buildTree(values, index * 2 + 1);
    node.right = buildTree(values, index * 2 + 2);
    return node;
}

function dumpTree(node) {
    if (node == null) {
        return [null];
    }
    return [node.val].concat(dumpTree(node.left), dumpTree(node.right));
}

console.log(distributeCoins(buildTree([3, 0, 0], 0)), 2);
console.log(distributeCoins(buildTree([0, 3, 0], 0)), 3);
console.log(distributeCoins(buildTree([1, 0, 2], 0)), 2);
console.log(distributeCoins(buildTree([1, 0, 0, null, 3], 0)), 4);
console.log(distributeCoins(buildTree([0, 0, 1, null, 3], 0)), 3);
