/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(N, dislikes) {
    const lead = Array.from({length: N + 1}, (_, i) => i);
    const rank = Array.from(lead, () => 0);
    const findLead = (n) => {
        if (lead[n] === n) {
            return n;
        }
        const parent = Math.abs(lead[n]);
        const side = lead[n] > 0 ? 1 : -1;
        const parentLead = findLead(parent);
        
        lead[n] = parentLead * side;
        return lead[n];
    }
    for (const [i, j] of dislikes) {
        const iLead = findLead(i);
        const jLead = findLead(j);
        if (iLead == jLead) {
            return false;
        }
        const iParent = Math.abs(iLead);
        const jParent = Math.abs(jLead);
        if (rank[iParent] > rank[jParent]) {
            const jSide = jLead > 0 ? 1 : -1;
            lead[j] = iLead * -1;
            lead[jParent] = jSide * lead[j];
        } else {
            if (rank[iParent] == rank[jParent]) {
                rank[jParent] += 1;
            }
            const iSide = iLead > 0 ? 1 : -1;
            lead[i] = jLead * -1;
            lead[iParent] = iSide * lead[i];
        }
    }
    return true;
};
