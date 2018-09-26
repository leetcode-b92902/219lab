class BSTIterator(object):
    def __init__(self, root):
        """
        :type root: TreeNode
        """ 
        self.stack = []
        if not root:
            return

        self.stack=[root]
        while self.stack[-1].left:
            self.stack.append(self.stack[-1].left)

    def hasNext(self):
        """
        :rtype: bool
        """
        if len(self.stack):
            return True
        else:
            return False

    def next(self):
        """
        :rtype: int
        """
        ret_node = self.stack.pop()
        if ret_node.right:
            self.stack.append(ret_node.right)
            while self.stack[-1].left:
                self.stack.append(self.stack[-1].left)
        return ret_node.val
