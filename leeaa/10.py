class Char:
    def __init__(self, c, r):
        self.c = c
        self.r = r

class Solution:

    def isMatch(self, s, p):
        P, i = [], 0
        while i < len(p):
            if i+1 < len(p) and p[i+1] == '*':
                newp = Char(p[i], True)
                i += 2
                if newp.c == '.':
                    while len(P) and P[-1].r:
                        P.pop()
                if len(P) and P[-1].c == newp.c and P[-1].r:
                    continue
                P.append(newp)
            else:
                newp = Char(p[i], False)
                if len(P) and P[-1].c == p[i] and P[-1].r:
                    tmp = P.pop()
                    P.append(newp)
                    P.append(tmp)
                else:
                    P.append(newp)
                i += 1

        def is_match(a,b):
            return a==b or b == '.'

        def isM(a, ax, b, bx):
            while bx < len(b):
                print(ax, len(a))
                print(bx, len(b))
                print("======")
                if b[bx].r:
                    if ax >= len(a):
                        bx += 1
                        continue

                    b[bx].r = False
                    for i in range(ax, len(a)):
                        if not is_match(a[i], b[bx].c):
                            break
                            #print(i)
                        if isM(a, i, b, bx):
                            return True
                    b[bx].r = True
                    bx += 1

                else:
                    if ax >= len(a):
                        return False

                    if is_match(a[ax], b[bx].c):
                        ax += 1
                        bx += 1
                    else:
                        return False

            if ax == len(a):
                return True
            else:
                return False

        #print(s)
        #for i in P:
        #    print(i.c, i.r)
        return isM(s, 0, P, 0)                    

A=Solution()
#s = "aab"
#p = "c*a*b"
#s = "mississippi"
#p = "mis*is*p*."
#s = "ab"
#p = ".*"
s = "aaa"
p="ab*a*c*a"
s="aasdfasdfasdfasdfas"
p="aasdf.*asdf.*asdf.*asdf.*s"

print(A.isMatch(s,p))
