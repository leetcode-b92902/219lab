/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(tnums, k) {
    const preCount = new Map();
    let ans = 0;
    let prefix = 0;
    
    preCount.set(0, 1);
    for (const n of nums) {
        prefix += n;
        ans += preCount.get(prefix - k) || 0;
        preCount.set(prefix, 1 + (preCount.get(prefix) || 0));
    }
    return ans;
};
