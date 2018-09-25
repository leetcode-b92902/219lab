class Solution:
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        carry = 1
        for i in range(len(digits)-1, -1, -1):
            digits[i] += carry
            carry = int(digits[i]/10)
            digits[i] %= 10

        if carry:
            digits = [1] + digits

        return digits

A = Solution()
arr = [1,2,3,4]
print(A.plusOne(arr))
