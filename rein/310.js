/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    const neighbor = Array.from({length: n}, () => new Set());
    for (const [a,b] of edges) {
        neighbor[a].add(b);
        neighbor[b].add(a);
    }
    let leaves = Array.from(neighbor.entries())
      .filter(e => e[1].size == 1)
      .map(e => e[0]);
    let remaining = n;
    while (remaining > 2) {
        remaining -= leaves.length;
        const newLeaves = [];
        for (const a of leaves) {
            const b = neighbor[a].values().next().value;
            neighbor[b].delete(a);
            if (neighbor[b].size == 1) {
                newLeaves.push(b);
            }
        }
        leaves = newLeaves;
    }
    return leaves;
};

console.log(findMinHeightTrees(3, [[0,1],[1,2]]));
console.log(findMinHeightTrees(4, [[0,1],[1,2],[2,3]]));
console.log(findMinHeightTrees(4, [[0,1],[1,2],[1,3]]));
console.log(findMinHeightTrees(6, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]));
console.log(findMinHeightTrees(7, [[0, 3], [1, 3], [2, 3], [4, 3], [5, 3], [4,6]]));
