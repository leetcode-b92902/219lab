/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const dp = Array.from(t, () => 0);
    for (let i = 0; i < s.length; ++i) {
        for (let j = t.length - 1; j > 0; --j) {
            if (s[i] == t[j]) {
                dp[j] += dp[j - 1];
            }
        }
        if (s[i] == t[0]) {
            dp[0] += 1;
        }
    }
    return dp[t.length - 1];
};
