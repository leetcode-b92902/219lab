class Solution:
    def exclusiveTime(self, n, logs):
        ans = [0 for i in range(n)]
        stack = []
        now = 0
        for log in logs:
            tmp = log.split(':')
            fid = int(tmp[0])
            t = int(tmp[2])

            if tmp[1] == 'end': # must pop
                last_id = stack.pop() # should be same as fid
                ans[last_id] += (t - now + 1)
                now = t+1
            else:
                if len(stack):
                    ans[stack[-1]] += (t-now)
                stack.append(fid)
                now = t
        return ans
n = 2
logs = ["0:start:0",
         "1:start:2",
          "1:end:5",
           "0:end:6"]
A=Solution()
print(A.exclusiveTime(n, logs))
                                                            
