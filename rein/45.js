/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let l = 0;
    let r = 0;
    let steps = 0;
    const D = nums.length - 1;
    while (r < D) {
        let nextR = r;
        for (let i = l; i <= r; ++i) {
            nextR = Math.max(nextR, nums[i] + i);
        }
        steps += 1;
        l = r + 1;
        r = nextR;
    }
    return steps;
}

console.log(2, jump([2,3,1,1,4]));
console.log(1, jump([5,3,1,1,10]));
console.log(3, jump([2,1,1,1,10]));
console.log(2, jump([3,1,1,1,10]));
console.log(2, jump([1,2,3]));
console.log(4, jump([1,1,1,2,3]));
console.log(4, jump([3,0,2,1,2,0,2,0,1]));
console.log(3, jump([3,4,3,2,5,4,3]));
console.log(0, jump([3]));
