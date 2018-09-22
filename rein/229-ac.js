/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const countMap = new Map();
    let firstCount = 0;
    let secondCount = 0;
    let first = NaN;
    let second = NaN;
    
    for (const n of nums) {
        const count = 1 + (countMap.get(n) || 0);
        countMap.set(n, count);
        if (count >= firstCount) {
            if (first == n) {
                firstCount = count;
            } else {
                secondCount = firstCount;
                second = first;
                first = n;
                firstCount = count;
            }
        } else if (count > secondCount) {
            secondCount = count;
            second = n;
        }
    }
    if (firstCount * 3 <= nums.length) {
        return [];
    }
    if (secondCount * 3 <= nums.length) {
        return [first];
    }
    return [first, second];
};
