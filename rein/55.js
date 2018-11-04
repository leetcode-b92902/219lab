/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; max >= i && i < nums.length; ++i) {
        max = Math.max(max, nums[i] + i);
    }
    return max >= nums.length - 1;
};

console.log(true, canJump([2,3,1,1,4]))
console.log(true, canJump([2,3,1,1,0]))
console.log(false, canJump([3,2,1,0,4]))
