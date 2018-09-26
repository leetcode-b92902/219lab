'use strict';
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const stack = [];
    const previousNonLower = [];

    for (const [i, h] of height.entries()) {
        while (stack.length > 0 && height[stack[0]] < h) {
            stack.shift();
        }
        if (stack.length == 0) {
            previousNonLower[i] = -1;
            stack.unshift(i);
            continue;
        }
        previousNonLower[i] = stack[0];
        stack.unshift(i);
    }
    ///console.log(Array.from(height, (_, i) => `${height[i]}:${previousNonLower[i]}`));
    let water = 0;
    let i = height.length - 1;
    let right = -1;
    let rightHeight = -1;
    while (i >= 0) {
        const h = height[i];
        if (rightHeight < h) {
            right = i;
            rightHeight = h;
            i -= 1;
            continue;
        }
        let left = i;
        while (height[left] < rightHeight) {
            const next = previousNonLower[left];
            if (next == -1) {
                break;
            }
            left = next;
        }
        if (left == i) {
            i -= 1;
            continue;
        }

        const wallHeight = Math.min(rightHeight, height[left]);
        //console.log(`${left} - ${right} | wall: ${wallHeight}`);
        for (let j = left + 1; j < right && height[j] <= wallHeight; ++j) {
            water += (wallHeight - height[j]);
            //console.log(`j: ${j}, ${wallHeight} - ${height[j]} | ${water}`);
        }
        right = left;
        rightHeight = height[left];
        i = left - 1;
    }

    return water;
};
            /*    0   1   2   3   4   5   6   7   8   9  10  11 */
console.log(trap([0 , 1 , 0 , 2 , 1 , 0 , 1 , 3 , 2 , 1 , 2 , 1]));
             /*  -1  -1   1  -1   3   4   4  -1   7   8   8  10
              *           1       2   2   2       3   2   2   2
              */
console.log(trap([5 , 5 , 4 , 7 , 8 , 2 , 6 , 9 , 4 , 5]));
             /*  -1   0   1  -1  -1   4   4  -1   7   7
              *       5   5           8   8       9   9
              */
console.log(trap([0,1,2,3,2,1]));
console.log(trap([3,2,1,2,3]));
console.log(trap([10,0,5,1,5,0,11]));
console.log(trap([10,0,5,1,5,0,10]));
console.log(trap([1,10,0,5,1,5,0,10,1]));
console.log(trap([1,5,2,10,2,5,1]));
console.log(trap([3,1,5,2,10,2,5,1]));
console.log(trap([7,1,5,2,10,2,5,1]));
console.log(trap([11,1,5,2,10,2,5,1]));

console.log(trap([1,5,2,3,10,2,5,1]));
console.log(trap([1,5,2,7,10,2,5,1]));
console.log(trap([1,5,2,11,10,2,5,1]));
