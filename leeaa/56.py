class Interval:
    def __init__(self, s=0, e=0):
        self.start = s
        self.end = e

class Solution:
    def merge(self, intervals):
        if len(intervals) == 0:
            return []
        intervals = sorted(intervals, key=lambda interval: interval.start)
        #brr=intervals
        #for b in brr:
        #    print(b.start, b.end)
        ans = [intervals[0]]
        for interval in intervals[1:]:
            if ans[-1].end >= interval.start:
                ans[-1].end = max(ans[-1].end, interval.end)
            else:
                ans.append(interval)
        return ans

arr = [[2,6],[1,3],[8,10],[15,18]]
#arr = [[1,4],[4,5],[5,7]]
test = []
for a in arr:
    test.append(Interval(a[0], a[1]))
A=Solution()
brr = A.merge(test)
for b in brr:
    print(b.start, b.end)
