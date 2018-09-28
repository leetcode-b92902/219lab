const getLead = function (n, map) {
  if (!map.has(n)) {
    return null;
  }
  const next = map.get(n);
  if (next == n) {
    return n;
  }
  const lead = getLead(next, map);
  map.set(n, lead);
  return lead;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const setLeadMap = new Map();
  const leadMap = new Map();
  const tailMap = new Map();
  let maxSequence = 0;
  for (const n of nums) {
    let lead = n;
    let tail = n;
    let setLead = n;
    if (!setLeadMap.has(n)) {
      setLeadMap.set(n, n);
      leadMap.set(n, n);
      tailMap.set(n, n);
    } else {
      setLead = getLead(n, setLeadMap);
      lead = leadMap.get(setLead);
      tail = tailMap.get(setLead);
    }

    const prevLead = getLead(n - 1, setLeadMap);
    if (prevLead != null && prevLead != setLead) {
      lead = Math.min(lead, leadMap.get(prevLead));
      tail = Math.max(tail, tailMap.get(prevLead));
      setLeadMap.set(prevLead, setLead);
    }

    const nextLead = getLead(n + 1, setLeadMap);
    if (nextLead != null && nextLead != setLead) {
      lead = Math.min(lead, leadMap.get(nextLead));
      tail = Math.max(tail, tailMap.get(nextLead));
      setLeadMap.set(nextLead, setLead);
    }

    leadMap.set(setLead, lead);
    tailMap.set(setLead, tail);
    const len = tail - lead + 1;
    if (len > maxSequence) {
      maxSequence = len;
    }
  }

  //for (const [k, l] of setLeadMap) {
    //console.log(`${k}/${getLead(k, setLeadMap)}: ${leadMap.get(l)} - ${tailMap.get(l)}`);
  //}

  return maxSequence;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]), 4);
console.log(longestConsecutive([1,2,0,1]), 3);
console.log(longestConsecutive([1,3,5,2,4]), 5);
console.log(longestConsecutive([1,3,1,5,2,4,2,7,6]), 7);
console.log(longestConsecutive([9,-8,9,8,-7,9,-4,6,5,5,6,7,-9,-5,-4,6,-8,-1,8,0,1,5,4]), 6);
console.log(longestConsecutive([-6,6,-9,-7,0,3,4,-2,2,-1,9,-9,5,-3,6,1,5,-1,-2,9,-9,-4,-6,-5,6,-1,3]), 14);

