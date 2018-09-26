class Solution(object):
    def findPeakElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        left, right = 0, len(nums)-1

        while left <= right:
            mid = int((left + right)/2)
            if (mid - 1 < 0 or nums[mid] > nums[mid-1]) and (mid + 1 >= len(nums) or nums[mid] > nums[mid+1]):
                return mid
            if mid - 1 < 0 or nums[mid] > nums[mid-1]:
                left = mid + 1
            else:
                right = mid - 1   
