class Solution:
    def majorityElement(self, nums):
        if len(nums) <= 2:
            return list(set(nums))

        lookup = {}
        for i in nums:
            if i in lookup:
                lookup[i] += 1
            else:
                if len(lookup) < 2:
                    lookup[i] = 1
                else:
                    for k in lookup:
                        lookup[k] -= 1
                    lookup = {k:v for k,v in lookup.items() if v > 0}

        candidate = lookup.keys()
        ret = []
        for i in candidate:
            if nums.count(i) * 3 > len(nums):
                ret.append(i)
        return ret

arr = [1,1]
A = Solution()
print(A.majorityElement(arr))

