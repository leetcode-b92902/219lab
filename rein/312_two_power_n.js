var maxCoins = function(nums) {
    const memo = new Map();
    const findMax = (indexs) => {
        if (indexs.length == 1) {
            return nums[indexs[0]];
        }
        const key = indexs.join(',');
        if (memo.has(key)) {
            return memo.get(key);
        }
        let max = 0;
        for (let i = 0; i < indexs.length; ++i) {
            let t = nums[indexs[i]]
            if (i > 0) {
                t *= nums[indexs[i - 1]];
            }
            if (i + 1 < indexs.length) {
                t *= nums[indexs[i + 1]];
            }
            t += findMax(indexs.slice(0, i).concat(indexs.slice(i + 1)))
            max = Math.max(max, t)
        }
        memo.set(key, max);
        return max;
    };
    const ans = findMax(Array.from(nums, (_, i) => i));
    return ans;
};


console.log(maxCoins([3, 5, 8, 7]));

