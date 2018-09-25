# Definition for a undirected graph node
# class UndirectedGraphNode:
#     def __init__(self, x):
#         self.label = x
#         self.neighbors = []

class Solution:
	# @param node, a undirected graph node
	# @return a undirected graph node
	def cloneGraph(self, node):
		if not node:
			return None

		def dfs(p, table):
			if p.label not in table:
				table[p.label] = UndirectedGraphNode(p.label)
				for n in p.neighbors:
					dfs(n, table)

		def dfs2(p, table, visited):
			if p.label in visited:
				return

			newp = table[p.label]
			for n in p.neighbors:
				newp.neighbors.append(table[n.label])
			visited.add(p.label)
			for n in p.neighbors:
				dfs2(n, table, visited)


			
		T = {}
		V = set()
		# dfs twice, 1st for dictionary{label:node}
		dfs(node, T)
		dfs2(node,T, V)
		return T[node.label]
