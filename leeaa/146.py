class Node:
    def __init__(self, key, val):
        self.next = None
        self.pre = None
        self.val = val
        self.key = key

class LRUCache:

    def __init__(self, capacity):
        """
        :type capacity: int
        map + circular double linked list
        key: node
        """
        self.capacity = capacity
        self.head = Node(-1, -1)
        self.head.next = self.head.pre = self.head
        self.table = {}

    def get(self, key):
        """
        :type key: int
        :rtype: int
        """
        #print("get ", key)
        if key in self.table:
            self.delete_node(self.table[key])
            self.insert_node(self.table[key])
            #print(self.table[key].val)
            return self.table[key].val
        else:
            #print(-1)
            return -1

    def put(self, key, value):
        """
        :type key: int
        :type value: int
        :rtype: void
        """
        if key in self.table:
            if self.table[key].val != -1:
                self.delete_node(self.table[key])
            self.table[key].val = value
            self.insert_node(self.table[key])

        elif len(self.table) == self.capacity:
            # remove from the tail
            tmpk = self.head.pre.key
            self.delete_node(self.head.pre)
            del self.table[tmpk]
            self.table[key] = Node(key, value)
            self.insert_node(self.table[key])
        else:
            self.table[key] = Node(key, value)
            self.insert_node(self.table[key])
        
    def delete_node(self, node):
        node.next.pre = node.pre
        node.pre.next = node.next

    def insert_node(self, node):
        node.next = self.head.next
        node.pre = self.head
        self.head.next.pre = node
        self.head.next = node

# Your LRUCache object will be instantiated and called as such:


steps =[[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4],[5],[5],[8,1],[11,7],[5,2],[9,28],[1],[2,2],[7,4],[4,22],[7,24],[9,26],[13,28],[11,26]]
cache = LRUCache(10)
for s in steps:
    print(s)
    if len(s) == 2:
        cache.put(s[0], s[1])
    else:
        cache.get(s[0])

