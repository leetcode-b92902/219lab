class Solution:
    def isValid(self, s):
        right = {')': '(', '}':'{', ']': '['}
        stack = []
        if len(s) == 0:
            return True

        stack = [s[0]]

        for i in range(1, len(s)):
            if s[i] not in right:
                stack.append(s[i])
            else:
                if len(stack) == 0:
                    return False
                if stack.pop() != right[s[i]]:
                    return False

        if len(stack) == 0:
            return True
        return False

A = Solution()
s = "()"
s = "(){}[]"
s = "([}]"
#s = "{[]}"
print(A.isValid(s))
