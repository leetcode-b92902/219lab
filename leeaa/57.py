class Interval:
    def __init__(self, s=0, e=0):
        self.start = s
        self.end = e

class Solution:
    def insert(self, intervals, newInterval):
        ans = []
        i = 0
        while i < len(intervals) and intervals[i].end < newInterval.start:
            ans.append(intervals[i])
            i += 1
        
        while i < len(intervals) and intervals[i].start <= newInterval.end:
            newInterval.start = min(newInterval.start, intervals[i].start)
            newInterval.end = max(newInterval.end, intervals[i].end)
            i += 1

        ans.append(newInterval)
        ans += intervals[i:]

        return ans

#arr = [[2,6],[1,3],[8,10],[15,18]]
#arr = [[1,4],[4,5],[5,7]]
arr = [[1,3],[6,9]]
test = []
for a in arr:
    test.append(Interval(a[0], a[1]))
nInterval = Interval(2,5)
A=Solution()
brr = A.insert(test, nInterval)
for b in brr:
    print(b.start, b.end)
