/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for (let i = 0; i < height.length; ++i) {
        for (let j = 1; j < height.length; ++j) {
            const area = (j - i) * Math.min(height[i], height[j]);
            max = Math.max(area, max);
        }
    }
    return max;
};
