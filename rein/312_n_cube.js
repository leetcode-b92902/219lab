var maxCoins = function(nums) {
    nums = [1].concat(nums.filter(n => n != 0), 1);
    const memo = new Map();

    const recursive = (start,end) => {
        if (start > end) {
            return 0;
        }
        const key = `${start}-${end}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        let localMax = 0;
        for (let finish = start; finish <= end; ++finish) {
            let coin = nums[finish] * nums[start - 1] * nums[end + 1];
            coin += recursive(start, finish - 1) + recursive(finish + 1, end)
            localMax = Math.max(coin, localMax);
        }
        memo.set(key, localMax);
        return localMax;
    };
    return recursive(1, nums.length - 2);
};

var maxCoinsDP = function (nums) {
    nums = [1, ...nums.filter(n => n != 0), 1];
    const N = nums.length - 2;
    const dp = nums.map(() => nums.map(() => 0));

    for (let range = 0; range < N; ++range) {
        for (let start = 1; start + range <= N; ++start) {
            const end = start + range;
            let localMax = 0;
            for (let finish = start; finish <= end; ++finish) {
                const coin = nums[start - 1] * nums[finish] * nums[end + 1]
                    + dp[start][finish - 1] + dp[finish + 1][end];
                localMax = Math.max(coin, localMax);
            }
            dp[start][end] = localMax;
        }
    }

    return dp[1][N];
};


console.log(maxCoins([3, 5, 8, 7]));
console.log(maxCoinsDP([3, 5, 8, 7]));

