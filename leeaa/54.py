class Solution:
        def spiralOrder(self, matrix):
            ans = []
            m = len(matrix)
            if not m:
                return ans

            n = len(matrix[0])
            if not n:
                return ans

            # 4 ways
            dx = [0, 1, 0, -1]
            dy = [1, 0, -1, 0]

            amount = [n, m-1]
            direction = 0
            x, y = 0, -1
            while amount[direction%2]:
                #print(ans)
                #print(amount)
                steps = amount[direction%2]
                for step in range(steps):
                    x += dx[direction%4]
                    y += dy[direction%4]
                    #print(x,y)
                    ans.append(matrix[x][y])
                amount[direction%2] -= 1
                direction += 1
            return ans

A = Solution()
arr = [
          [1, 2, 3, 4],
            [5, 6, 7, 8],
              [9,10,11,12]
              ]
arr = [[1,2,3]]

print(A.spiralOrder(arr))



