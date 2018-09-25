/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let lastAscending = -1;
    for (let i = nums.length - 2; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) {
            lastAscending = i;
            break;
        }
    }
    if (lastAscending === -1) {
        nums.reverse();
        return;
    }

    const pin = nums[lastAscending];
    let justLargerThanPin = lastAscending + 1;
    for (let i = lastAscending + 2; i < nums.length; ++i) {
        if (nums[i] > pin && nums[i] < nums[justLargerThanPin]) {
            justLargerThanPin = i;
        }
    }
    nums[lastAscending] = nums[justLargerThanPin];
    nums[justLargerThanPin] = pin;
    const tail = nums.slice(lastAscending + 1);
    tail.sort((a, b) => a - b);
    for (let i = lastAscending + 1; i < nums.length; ++i) {
        nums[i] = tail[i - lastAscending - 1];
    }
    return;
};
