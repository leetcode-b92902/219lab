class Node:
    def __init__(self, leftc, rightc):
        self.status = 0
        self.lc = leftc
        self.rc = rightc
        # status 0:not yet, 1:left done, 2:right done

class Solution:
    def generateParenthesis(self, n):
        if n == 0:
            return ""

        stack_c = ['(']
        stack = [Node(n-1,1)]
        ans = []
        while len(stack):
            if len(stack) == 2 * n:
                ans.append(''.join(stack_c))
                stack.pop()
                stack_c.pop()
                continue

            now = stack[-1]

            if now.status == 0:
                stack[-1].status += 1
                if now.lc:
                    stack_c.append('(')
                    stack.append(Node(now.lc-1, now.rc+1))
            elif now.status == 1:
                stack[-1].status += 1
                if now.rc:
                    stack_c.append(')')
                    stack.append(Node(now.lc, now.rc-1))
            else:
                stack.pop()
                stack_c.pop()

        return ans

A = Solution()
n =  2

print(A.generateParenthesis(n))

