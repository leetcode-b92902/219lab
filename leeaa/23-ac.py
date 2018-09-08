class ListNode:
    def __init__(self, x):
         self.val = x
         self.next = None

class Solution:
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        import heapq
        heap = []
        for idx, head in enumerate(lists):
            if head:
                heapq.heappush(heap, (head.val, idx))

        anshead = ListNode(-1)
        ans = anshead
        while len(heap):
            _, idx = heapq.heappop(heap)
            ans.next = lists[idx]
            lists[idx] = lists[idx].next
            if lists[idx]:
                heapq.heappush(heap, (lists[idx].val, idx))
            ans = ans.next
        return anshead.next

A= Solution()
a = ListNode(0)
b = ListNode(2)
c = ListNode(4)
d = ListNode(1)
e = ListNode(3)
a.next = b
b.next = c
d.next = e
x = A.mergeKLists([a, d])
while x:
    print(x.val)
    x = x.next

