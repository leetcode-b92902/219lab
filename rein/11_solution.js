/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        max = Math.max(max, Math.min(height[l], height[r]) * (r - l))
        if (height[l] > height[r]) {
            --r;
        } else {
            ++l;
        }
    }
    return max;
};

console.log(49, maxArea([1,8,6,2,5,4,8,3,7]));
