/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    let maxArea = 0;

    heights.push(0);
    for (let right = 0; right < heights.length; ++right) {
        const currentH = heights[right];
        let left = right;
        while (stack.length > 0 && stack[stack.length - 1].h >= currentH) {
            const prev = stack.pop();
            const area = (right - prev.i) * prev.h;
            maxArea = Math.max(maxArea, area);
            left = prev.i;
        }
        stack.push({
            i: left,
            h: currentH,
        });
    }

    return maxArea;
};

console.log(10, largestRectangleArea([2,1,5,6,2,3]));
console.log(0, largestRectangleArea([]));
console.log(8, largestRectangleArea([2,1,3,3,2,2]));
console.log(10, largestRectangleArea([2,1,10,3,2,2]));
console.log(9, largestRectangleArea([3,3,3,1,2,2]));
console.log(12, largestRectangleArea([1,2,3,4,5,6]));
console.log(10, largestRectangleArea([6,5,0,3,2,1]));
console.log(0, largestRectangleArea([0]));
