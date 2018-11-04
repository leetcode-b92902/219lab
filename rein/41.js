/**
 *  * @param {number[]} nums
 *  * @return {number}
 *  */
var firstMissingPositive = function(nums) {
    const N = nums.length;
    let i = 0;
    while (i < N) {
        const n = nums[i];
        if (n <= 0 || n > N) {
            ++i;
            continue;
        }
        const t = nums[n - 1];
        if (i == n - 1 || t == n) {
            ++i;
            continue;
        }
        nums[i] = t;
        nums[n - 1] = n;
    }
    for (i = 0; i < N; ++i) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return N + 1;
};

console.log(3, firstMissingPositive([1,2,0]));
console.log(4, firstMissingPositive([3,1,2]));
console.log(2, firstMissingPositive([3,4,-1,1]));
console.log(1, firstMissingPositive([7,8,9,11,12]));
console.log(1, firstMissingPositive([7,8,5,4,12]));
console.log(2, firstMissingPositive([1,1]));
console.log(1, firstMissingPositive([2,3,2]));
