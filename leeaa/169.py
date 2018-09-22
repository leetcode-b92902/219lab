class Solution:
    def majorityElement(self, nums):
        candidate = None
        candidate_num = 0
        for num in nums:
            if candidate_num == 0:
                candidate = num

            if candidate == num:
                candidate_num += 1
            else:
                candidate_num -= 1
        return candidate

A = Solution()
print(A.majorityElement([2,2,1,1,1,2,2]))
