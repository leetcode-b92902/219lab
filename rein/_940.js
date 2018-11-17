/**
 * @param {string} S
 * @return {number}
 */
var distinctSubseqII = function(S) {
    if (S.length <= 1) {
        return S.length;
    }
    const MOD = 1000 * 1000 * 1000 + 7;
    const modMinus = (a, b) => a >= b ? a - b : (a - b + MOD);
    const lastAppear = new Map();
    const dp = [1];

    for (let i = 0; i < S.length; ++i) {
        dp.push((dp[i] * 2) % MOD);
        if (lastAppear.has(S[i])) {
            dp[i + 1] = modMinus(dp[i + 1], dp[lastAppear.get(S[i])]);
        }
        lastAppear.set(S[i], i);
    }
    return modMinus(dp[S.length], 1);
};

console.log(distinctSubseqII('abc'), 7);
console.log(distinctSubseqII('aba'), 6);
console.log(distinctSubseqII('aab'), 5);
console.log(distinctSubseqII('baa'), 5);
console.log(distinctSubseqII('aaa'), 3);
console.log(distinctSubseqII('abab'), 11);
