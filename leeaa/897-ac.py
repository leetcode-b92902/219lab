# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def increasingBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        new_root = TreeNode(-1)
        next_right = new_root
        stack = [root]
        # in-order:
        # 1. check left: yes, put it into stack, now.left = None
        # 2.             no, popout now, put the right into stack
        while len(stack):
            now = stack.pop()
            if now.left:
                left = now.left
                now.left = None
                stack.append(now)
                stack.append(left)
            else:
                if now.right:
                    stack.append(now.right)
                    now.right = None
                next_right.right = now
                next_right = next_right.right
        return new_root.right
