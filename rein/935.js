/**
 * @param {number} N
 * @return {number}
 */
var knightDialer = function(N) {
    const MOD = 1000 * 1000 * 1000 + 7;
    const map = [
        [4, 6],
        [6, 8],
        [7, 9],
        [4, 8],
        [3, 9, 0],
        [],
        [1, 7, 0],
        [2, 6],
        [1, 3],
        [2, 4],
    ];

    let state = map.map(() => 1);

    for (let i = 1; i < N; ++i) {
        const newState = map.map(() => 0);
        for (let prev = 0; prev < map.length; ++prev) {
            for (const next of map[prev]) {
                newState[next] = (newState[next] + state[prev]) % MOD;
            }
        }
        state = newState;
    }

    return state.reduce((s, c) => (s + c) % MOD, 0);
};

console.log(knightDialer(1))
console.log(knightDialer(2))
console.log(knightDialer(5000))
