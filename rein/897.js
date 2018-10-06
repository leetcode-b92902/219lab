/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    const dummy = new TreeNode(0);
    let prev = dummy;
    const traverse = (node) => {
        if (node == null) {
            return null;
        }
        traverse(node.left);
        prev.right = node;
        node.left = null;
        prev = node;
        traverse(node.right);
    };
    traverse(root);
    prev.right = null;
    return dummy.right;
};
