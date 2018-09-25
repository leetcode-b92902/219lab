class Solution(object):
    def wordBreak(self, s, wordDict):
        """
        :type s: str
        :type wordDict: List[str]
        :rtype: bool
        """
        table = [[-1]] + [[] for i in range(len(s))]
        for i in range(len(table)):
            if len(table[i]):
                for wi, w in enumerate(wordDict):
                    if i + len(w) <= len(s) and w == s[i: i + len(w)]:
                        table[i + len(w)].append(wi)
        ans = []
        stack = [(len(s),0)] # idx, counter
        #print table
        while len(stack):            
            now, counter = stack.pop()
            if now == 0: # to the head:
                tmp = []
                for si, sc in stack:
                    tmp.append(wordDict[table[si][sc-1]])
                ans.append(' '.join(tmp[::-1]))
                #stack_w.pop()
                continue

            #if counter >= len(table[now]):
            
            if counter < len(table[now]):
                tmpw = wordDict[table[now][counter]]        
                stack.append((now, counter+1))
                stack.append((now-len(tmpw),0))
        
        return ans
