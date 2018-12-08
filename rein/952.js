/*
precalculate primes in [2 .. (100000)^0.5] using sieves

for each p in prime factors of node[i]:
    DSU_join(parent[p], parent[i])

let countMap: Map(parent -> count)
let maxComponentSize <- 0;

for n in A:
   countMap[parent(n)] += 1
   if countMap[parent(n)] > maxComponentSize: maxComponentSize = countMap[parent(n)]
*/

const primes = (() => {
    const MAX = Math.floor(Math.sqrt(100000)) + 1;
    const sieve = Array.from({length: MAX}, () => true)
    const primes = [];
    for (let i = 2; i < MAX; ++i) {
        if (sieve[i]) {
            primes.push(i)
            for (let j = i * 2; j < MAX; j += i) {
                sieve[j] = false;
            }
        }
    }
    return primes;
})();

const getPrimeFactors = (n) => {
    if (n <= 1) {
        return [];
    }
    const pfs = [];
    for (let i = 0; n > 1 && i < primes.length; ++i) {
        const p = primes[i];
        if (n % p == 0) {
            pfs.push(p)
            while (n % p == 0) {
                n /= p;
            }
        }
    }
    if (n != 1) {
        pfs.push(n);
    }
    return pfs;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var largestComponentSize = function(A) {
    const parentMap = new Map();
    const orderMap = new Map();

    const getParent = (n) => {
        if (!parentMap.has(n)) {
            parentMap.set(n, n);
            orderMap.set(n, 1);
            return n;
        }
        let p = parentMap.get(n)
        if (p != n) {
            p = getParent(p)
            parentMap.set(n, p)
        }
        return p;
    };
    const join = (a, b) => {
        a = getParent(a);
        b = getParent(b);
        if (a == b) {
            return;
        }
        const aOrder = orderMap.get(a);
        const bOrder = orderMap.get(b);
        if (aOrder > bOrder) {
            parentMap.set(b, a);
        } else {
            parentMap.set(a, b);
            if (aOrder == bOrder) {
                orderMap.set(b, bOrder + 1);
            }
        }
    };
    for (const n of A) {
        for (const p of getPrimeFactors(n)) {
            join(p, n);
        }
    }
    const countMap = new Map();
    let maxComponentSize = 0;
    for (const n of A) {
        const parent = getParent(n)
        const count = 1 + (countMap.get(parent) || 0);
        countMap.set(parent, count);
        maxComponentSize = Math.max(maxComponentSize, count);
    }
    return maxComponentSize;
};

console.log(4, largestComponentSize([4,6,15,35]))
console.log(2, largestComponentSize([20,50,9,63]))
console.log(8, largestComponentSize([2,3,6,7,4,12,21,39]))
console.log(6, largestComponentSize([2,3,6,7,4,12,39]))
console.log(4, largestComponentSize([83,99,39,11,19,30,31]))
console.log(84, largestComponentSize([2,7,522,526,535,26,944,35,519,45,48,567,266,68,74,591,81,86,602,93,610,621,111,114,629,641,131,651,142,659,669,161,674,163,180,187,190,194,195,206,207,218,737,229,240,757,770,260,778,270,272,785,274,290,291,292,296,810,816,314,829,833,841,349,880,369,147,897,387,390,905,405,406,407,414,416,417,425,938,429,432,926,959,960,449,963,966,929,457,463,981,985,79,487,1000,494,508]))
