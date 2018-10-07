function Interval(start, end) {
    this.start = start;
    this.end = end;
}
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    if (intervals.length == 0) {
        return [newInterval]
    }
    let left = -1;
    let right = -1;
    let high = intervals.length - 1;
    let low = 0;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (newInterval.start == intervals[mid].end) {
            left = mid;
            break;
        }
        if (newInterval.start > intervals[mid].end) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    if (left == -1) {
        left = high;
    }
    high = intervals.length - 1;
    low = left;
    while (low < high) {
        const mid = Math.ceil((low + high) / 2);
        if (newInterval.end == intervals[mid].start) {
            right = mid;
            break;
        }
        if (newInterval.end < intervals[mid].start) {
            high = mid - 1;
        } else {
            low = mid;
        }
    }
    if (right == -1) {
        right = low;
    }
    const replaceLeft = newInterval.start <= intervals[left].end;
    const replaceRight = newInterval.end >= intervals[right].start;
    if (replaceLeft) {
        newInterval.start = Math.min(newInterval.start, intervals[left].start);
    }
    if (replaceRight) {
        newInterval.end = Math.max(newInterval.end, intervals[right].end);
    }
    //console.log(`${left}(${replaceLeft}) - ${right}(${replaceRight})`);
    return [].concat(
        intervals.slice(0, replaceLeft ? left : left + 1),
        [newInterval],
        intervals.slice(replaceRight ? right + 1: right)
    );
};

function intervalsToString (intervals) {
    return intervals.map(i => `[${i.start}, ${i.end}]`).join('');
}

function test (rawIntervals, [start, end], expect) {
    const intervals = rawIntervals.map(([start, end]) => new Interval(start, end));
    const newInterval = new Interval(start, end);
    const actual = insert(intervals, newInterval);
    const correct = expect.every(([start, end], idx) => {
        const i = actual[idx];
        return i && i.start == start && i.end == end;
    });
    if (!correct) {
        console.log(rawIntervals, [start, end]);
        console.log(`expect: ${expect}`);
        console.log(`actual: ${intervalsToString(actual)}`);
    }
}

test([[1,3],[6,9]], [2,5], [[1,5],[6,9]]);
test([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8], [[1,2],[3,10],[12,16]]);
test([[1,2],[3,5],[8,10],[12,16]], [6,8], [[1,2],[3,5],[6,10],[12,16]]);
test([[1,2],[3,5],[8,10],[12,16]], [6,9], [[1,2],[3,5],[6,10],[12,16]]);
test([[3,5],[8,10],[12,16]], [6,7], [[3,5],[6,7],[8,10],[12,16]]);
test([[3,5],[8,10],[12,16]], [5,7], [[3,7],[8,10],[12,16]]);
test([[3,5],[8,10],[12,16]], [4,7], [[3,7],[8,10],[12,16]]);
test([], [123,321], [[123,321]]);
