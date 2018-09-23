class Solution:
    def isMatch(self, s, p):

        def is_match(x, y):
            return x == y or y == '?'

        def isM(a, ax, b, bx):
            print(ax, bx)
            while bx < len(b):
                if b[bx] == '*':
                    for i in range(ax+1, len(a)+1):
                        if isM(a, i, b, bx+1):
                            return True
                    bx += 1

                else:
                    if ax >= len(a):
                        return False
                    if not is_match(a[ax], b[bx]):
                        return False
                    ax += 1
                    bx += 1

            if ax == len(a):
                return True
            else:
                return False
        bb = []
        for i in p:
            if i == '*' and len(bb) and bb[-1] == '*':
                continue
            bb.append(i)
                
        return isM(s, 0,bb, 0)

A=Solution()
s = "adceb"
p = "*a*b"
#s = "acdcb"
#p = "a*c?b"
#s = "aa"
#p="*"
s="abcdefgaaag"
p="??c?*a??"
a="aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba"
p="a*******b"
s="babbbbaabababaabbababaababaabbaabababbaaababbababaaaaaabbabaaaabababbabbababbbaaaababbbabbbbbbbbbbaabbb"
p="b**bb**a**bba*b**a*bbb**aba***babbb*aa****aabb*bbb***a"
print(A.isMatch(s,p))
