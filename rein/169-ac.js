/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const countMap = new Map();
    let majority = nums[0];
    let majorityCount = 0;
    
    for (const n of nums) {
        const newCount = 1 + (countMap.get(n) || 0);
        countMap.set(n, newCount);
        if (newCount > majorityCount) {
            majority = n;
            majorityCount = newCount;
        }
    }
    return majority;
};
