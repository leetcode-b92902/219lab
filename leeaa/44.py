class Solution:
    def isMatch(self, s, p):

        def is_match(x, y):
            return x == y or y == '?' or x =='?'

        def isM(s1, s2):
            #print(s1, s2)
            if len(s1) != len(s2):
                return False
            for i in range(len(s1)):
                if not is_match(s1[i], s2[i]):
                    return False
            return True

        bb = []
        for i in p:
            if i == '*' and len(bb) and bb[-1] == '*':
                continue
            bb.append(i)

        bb = ''.join(bb)
        if bb == '*':
            return True
        if bb.count('*') == 0:
            return isM(bb,s)

        subs = bb.split('*')
        #print(subs)

        if len(subs[-1]):
            # try match tail
            if not isM(subs[-1], s[(-1) * len(subs[-1]):]):
                return False
            s = s[:(-1) * len(subs[-1])]
        subs.pop()
        #print(s)
        if len(subs):
            # try match head
            if len(subs[0]):
                if not isM(subs[0], s[:len(subs[0])]):
                    return False
                s = s[len(subs[0]):]
            subs = subs[1:]
        # greedy match for the rest of subsstring
        #print("head/tail", s) 
        start = 0
        subs = subs[::-1]
        while len(subs) and start <= len(s):
            now = subs[-1]
            if isM(s[start:start+len(now)], now):
                subs.pop()
                start += len(now)
            else:
                start += 1
        if len(subs):
            return False
        return True


A=Solution()
s = 'aa'
p = 'a'
#s = "adceb"
#p = "*a*b"
#s = "acdcb"
#p = "a*c?b"
#s = "aa"
#p="*"
#s="abcdefgaaag"
#p="??c?*a??"
#a="aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba"
#p="a*******b"
#s="babbbbaabababaabbababaababaabbaabababbaaababbababaaaaaabbabaaaabababbabbababbbaaaababbbabbbbbbbbbbaabbb"
#p="b**bb**a**bba*b**a*bbb**aba***babbb*aa****aabb*bbb***a"
s = 'abdfaf'
p = '*f'
print(A.isMatch(s,p))
