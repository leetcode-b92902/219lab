class Solution(object):
    def fractionToDecimal(self, numerator, denominator):
        """
        :type numerator: int
        :type denominator: int
        :rtype: str
        """
        if numerator%denominator==0:
            return str(numerator/denominator)
        
        ans = ""
        if numerator * denominator < 0:
            ans += '-'
        numerator = abs(numerator)        
        denominator = abs(denominator)        
        ans += str(int(numerator/denominator)) + '.'
        r = numerator%denominator
        rs = {}
        rans = []
        while r > 0:
            if r in rs: #loop
                return ans + ''.join(rans[:rs[r]]) + '(' + ''.join(rans[rs[r]:]) + ')'
            rs[r] = len(rans)
            r *= 10
            rans.append(str(int(r/denominator)))
            r %= denominator

        return ans + ''.join(rans)
