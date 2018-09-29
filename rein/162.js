/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if (nums.length == 0) {
        throw new Error('nums is empty');
    }
    if (nums.length == 1) {
        return 0;
    }
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if (nums[high] < nums[high - 1] || nums[high] < nums[high + 1]) {
        throw new Error('oops');
    }
    return high;
};

console.log(findPeakElement([1,2,3,1]), 2);
console.log(findPeakElement([1,2,1,3,5,6,4]), "1 or 5");
console.log(findPeakElement([1,2,3]), 2);
console.log(findPeakElement([1,2,3,4]), 3);
console.log(findPeakElement([3,2,1]), 0);
console.log(findPeakElement([4,5,6,3,1,2,1]), "2 or 5");
