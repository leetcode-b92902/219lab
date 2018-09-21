class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        def findx(x, A, B, aleft, aright, bleft, bright):

            if aright - aleft < 0:
                return B[bleft + x]
            if bright - bleft < 0:
                return A[aleft + x]

            amid = int((aleft+aright)/2)
            bmid = int((bleft+bright)/2)


            if A[amid] < B[bmid]:
                A, B, aleft, aright, bleft, bright, amid, bmid = B, A, bleft, bright, aleft, aright, bmid, amid

            #print(x)
            #print(A[aleft:aright+1], A[amid])
            #print(B[bleft:bright+1], B[bmid])
            #print A[amid], B[bmid]
            
            leftcount = (amid-aleft) + (bmid-bleft+1)
                
            if x < leftcount: # choose left
                aright = amid - 1
            else:
                x -= (bmid-bleft+1)
                bleft = bmid + 1

            return findx(x, A, B, aleft, aright, bleft, bright)
        
        if (len(nums1) + len(nums2)) % 2:
            return findx(int((len(nums1) + len(nums2))/2), nums1, nums2, 0, len(nums1)-1, 0, len(nums2)-1)
        else:
            a = findx(int((len(nums1) + len(nums2))/2), nums1, nums2, 0, len(nums1)-1, 0, len(nums2)-1)
            b = findx(int((len(nums1) + len(nums2))/2) - 1, nums1, nums2, 0, len(nums1)-1, 0, len(nums2)-1)
            #print a, b
            return (a+b)/2.0

A = Solution()

import random
def genarr():
    n = random.randint(50, 350)
    ret = []
    for i in range(n):
        ret.append(random.randint(0,1000))
    ret.sort()
    return ret

for i in range(1000):
    P = genarr()
    Q = genarr()
    R = P + Q
    R.sort()
    #print(P)
    #print(Q)
    if len(R) % 2:
        ans = R[int(len(R)/2)]
    else:
        ans = (R[int(len(R)/2)] + R[int(len(R)/2-1)])/2
    ans2 = A.findMedianSortedArrays(P,Q)
    if ans!=ans2:
        print("failed")
        print(P)
        print(Q)
        print(ans)
        print(ans2)

