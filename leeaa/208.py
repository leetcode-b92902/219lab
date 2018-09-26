class TreeNode(object):
    def __init__(self):
        self.next = [None for i in range(26)]
        self.end = False

class Trie(object):

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.root = TreeNode()

    def insert(self, word):
        """
        Inserts a word into the trie.
        :type word: str
        :rtype: void
        """
        now = self.root
        for c in word:
            idx = ord(c) - ord('a')
            if not now.next[idx]:
                now.next[idx] = TreeNode()
            now = now.next[idx]
        now.end = True
        

    def search(self, word):
        """
        Returns if the word is in the trie.
        :type word: str
        :rtype: bool
        """
        now = self.root
        for c in word:
            idx = ord(c) - ord('a')
            if now.next[idx]:
                now = now.next[idx]
            else:
                return False
        return now.end

    def startsWith(self, prefix):
        """
        Returns if there is any word in the trie that starts with the given prefix.
        :type prefix: str
        :rtype: bool
        """
        now = self.root
        for c in prefix:
            idx = ord(c) - ord('a')
            if now.next[idx]:
                now = now.next[idx]
            else:
                return False
        return True

