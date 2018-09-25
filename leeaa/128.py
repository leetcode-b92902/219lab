class Solution:
    def longestConsecutive(self, nums):
        if len(nums) <= 1:
            return len(nums)

        s = set(nums)
        ans = 0
        while len(s):
            mid = s.pop()
            # forward
            right = mid + 1
            while right in s:
                s.remove(right)
                right += 1

            left = mid - 1
            while left in s:
                s.remove(left)
                left -= 1
            ans = max(right - left - 1, ans)
        return ans

arr = [100, 4, 200, 1, 3, 2]
A = Solution()
print(A.longestConsecutive(arr))
                                                    
