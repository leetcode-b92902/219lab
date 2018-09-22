class Solution:
    def letterCombinations(self, digits):
        arr = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
        if len(digits) == 0:
            return []
        

        stack = [0]*len(digits)
        ans = []
        while len(stack):
            #print(ans)
            #print(stack)
            if len(stack)==len(digits):
                tmpc = []
                for i in range(len(stack)-1):
                    tmpc.append(arr[int(digits[i])][stack[i]])
                for i in arr[int(digits[-1])]:
                    ans.append(''.join(tmpc + [i]))
                stack.pop()
            else:
                if stack[-1] + 1 < len(arr[int(digits[len(stack)-1])]):
                    stack[-1] += 1
                    while len(stack) < len(digits):
                        stack.append(0)
                else:
                    stack.pop()
        return ans

A = Solution()
print(A.letterCombinations("23"))

