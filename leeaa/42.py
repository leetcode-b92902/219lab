class Solution:
    def trap(self, height):
        if len(height) <= 2:
            return 0

        left = [height[0]]
        right = [height[-1]]

        for i in range(1, len(height)):
            left.append(max(left[-1], height[i]))

        for i in range(len(height)-2, -1, -1):
            right.append(max(right[-1], height[i]))
        right = right[::-1]
        #print(left)
        #print(right)
        #print(height)
        ans = 0
        for i in range(0, len(height)):
            ans += min(left[i], right[i]) - height[i]
            #print( min(left[i], right[i]) - height[i])
        return ans

arr=[0,1,0,2,1,0,1,3,2,1,2,1]
A = Solution()
print(A.trap(arr))
