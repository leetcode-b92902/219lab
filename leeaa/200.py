import Queue
class Solution(object):
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        dx = [0,0,1,-1]
        dy = [1,-1,0,0]
        
        n = len(grid)
        if n == 0:
            return 0
        m = len(grid[0])
        if m == 0:
            return 0
        
        ans = 0
        visited = set()
        for i in range(n):
            for j in range(m):
                if grid[i][j] == '1' and (i,j) not in visited:
                    ans += 1
                    q = Queue.Queue()
                    q.put((i,j))
                    visited.add((i,j))
                    while not q.empty():
                        x, y = q.get()
                        for k in range(4):
                            tx, ty = x + dx[k], y + dy[k]
                            if tx >= 0 and tx < n and ty >=0 and ty < m and grid[tx][ty]=='1' and (tx,ty) not in visited:
                                q.put((tx,ty))
                                visited.add((tx,ty))
        return ans

