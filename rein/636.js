/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const funcTime = Array.from({length: n}, () => 0);
    const stack = [];
    let lastEnterTime = -1;
    for (const l of logs) {
        const parts = l.split(':');
        const id = parseInt(parts[0], 10);
        const time = parseInt(parts[2], 10);
        if (parts[1] == 'start') {
            if (stack.length > 0) {
                const invoke = stack[stack.length - 1];
                funcTime[invoke] += time - lastEnterTime;
            }
            lastEnterTime = time;
            stack.push(id);
        } else if (parts[1] == 'end') {
            const invoke = stack.pop();
            if (invoke == null || invoke !== id) {
                throw new Error('stack messed up');
            }
            funcTime[invoke] += time - lastEnterTime + 1;
            lastEnterTime = time + 1;
        } else {
            throw new Error('unknown event');
        }
    }
    return funcTime;
};
