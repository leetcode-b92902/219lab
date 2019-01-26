/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
    if (A.length == 0) {
        return 0;
    }
    let max = 1;
    let runLength = 1;
    let prevSign = 0; // -1, 0, 1
    const getSign = (diff) => diff == 0 ? 0 : (diff / Math.abs(diff));
    for (let i = 1; i < A.length; ++i) {
        const currentSign = getSign(A[i] - A[i - 1]);
        if (currentSign * prevSign == -1) {
            runLength += 1;
        } else if (currentSign == 0) {
            runLength = 1;
        } else {
            runLength = 2;
        }
        max = Math.max(max, runLength);
        prevSign = currentSign;
    }

    return max;
};

console.log(maxTurbulenceSize([9,4,2,10,7,8,8,1,9]), 5);
console.log(maxTurbulenceSize([4,8,12,16]), 2);
console.log(maxTurbulenceSize([100]), 1);
