class Solution:
    def nextPermutation(self, nums):
        # two patterns: /\, /--
        if len(nums) <= 1 or nums.count(nums[-1]) == len(nums):
            return

        x = len(nums)-1
        while x - 1 >= 0 and nums[x] == nums[x-1]:
            x -= 1

        # /-?
        if nums[x] > nums[x-1]:
            nums[x], nums[x-1] = nums[x-1], nums[x]
            return

        #/?\_?
        while x - 1 >= 0 and nums[x-1] >= nums[x]:
            x -= 1

        # swap x to the end
        left = x
        right = len(nums)-1
        while left < right:
            nums[left], nums[right] = nums[right], nums[left]
            left += 1
            right -= 1
        # find first element > nums[x-1]
        if x - 1 >= 0:
            c = x - 1
            while x < len(nums):
                if nums[x] > nums[c]:
                    nums[x], nums[c] = nums[c], nums[x]
                    break
                x += 1


A = Solution()
arr = [1,1,1,2,2,3,3,3,3]
arr = [3,3,3,3,2,2,1,1,1]
arr = [1,1,5]
arr = [2,3,1]
print(A.nextPermutation(arr))
print(arr)
