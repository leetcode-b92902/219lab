class Solution:
    def possibleBipartition(self, N, dislikes):
        graph = [[] for i in range(N+1)]
        depth = [ -1 for i in range(N+1)]
        for x in dislikes:
            graph[x[0]].append(x[1])
            graph[x[1]].append(x[0])

        for node in range(1, N+1):
            if depth[node] != -1:
                continue
            if len(graph[node]) == 0:
                continue
            stack = [node]
            depth[node] = 0
            while len(stack):
                now = stack[-1]
                if len(graph[now]) == 0:
                    stack.pop()
                else:
                    next_node = graph[now].pop()
                    if depth[next_node] == -1:
                        depth[next_node] = depth[now] + 1
                        stack.append(next_node)
                    else:
                        if abs(depth[next_node]-depth[now])%2 == 0:
                            return False
        return True

A = Solution()
N = 4
dislikes = [[1,2],[1,3],[2,4]]
print (A.possibleBipartition(N, dislikes))

