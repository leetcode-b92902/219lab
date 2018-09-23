class Solution:
    def myPow(self, x, n):
        def xpow(a, b, lookup):
            if b == 0:
                return 1
            if b == 1:
                return a
            if b in lookup:
                return lookup[b]

            tmp = xpow(x, int(b/2), lookup) 
            if b % 2:
                lookup[b] = tmp * tmp * x
            else:
                lookup[b] = tmp * tmp
            return lookup[b]


        lookup = {}
        if n >= 0:
            return xpow(x, n, lookup)

        else:
            return 1.0/xpow(x, (-1) * n, lookup)

A = Solution()
X = 2.0000
N = -2
X = 2.10000
N = 3
X = 2.0000
N = 10
print(A.myPow(X,N))
