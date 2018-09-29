/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = Array.from({length: capacity + 1}, (_, i) => ({
        key: -1,
        value: -1,
        next: i + 1,
        prev: i - 1,
    }));
    this.cache[0].next = -1; // 0 is "cacheHead", and never changes
    this.cache[0].prev = 0;
    this.cacheTail = 0;
    this.vacantList = 1;
    this.cache[capacity].next = -1;
    this.indexMap = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.indexMap.has(key)) {
        return -1;
    }
    const index = this.indexMap.get(key);
    this._moveToTail(index);

    return this.cache[index].value;
};

LRUCache.prototype._moveToTail = function (index) {
    if (index == this.cacheTail) {
        return;
    }
    const info = this.cache[index];
    this.cache[info.prev].next = info.next;
    this.cache[info.next].prev = info.prev;
    this.cache[this.cacheTail].next = index;
    info.prev = this.cacheTail;
    info.next = -1;
    this.cacheTail = index;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let index = -1;
    if (this.indexMap.has(key)) {
        index = this.indexMap.get(key);
        this._moveToTail(index);
        this.cache[index].value = value;
        return;
    }
    if (this.vacantList >= 0) {
        index = this.vacantList;
        this.vacantList = this.cache[this.vacantList].next;

        this.indexMap.set(key, index);
        const info = this.cache[index];
        info.key = key;
        info.value = value;
        info.prev = this.cacheTail;
        info.next = -1;

        this.cache[this.cacheTail].next = index;
        this.cacheTail = index;

        return;
    }
    index = this.cache[0].next;
    this._moveToTail(index);
    const info = this.cache[index];
    this.indexMap.delete(info.key);
    this.indexMap.set(key, index);
    info.key = key;
    info.value = value;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var obj = new LRUCache(2)
obj.put(1,123);
console.log(obj.get(1));
obj.put(2,234);
console.log(obj.get(1));
console.log(obj.get(2));
obj.put(3,345);
for (let i = 0; i != -1; i = obj.cache[i].next) {
    console.log(`index: ${i} : ${obj.cache[i].value}`);
}

const assert = require('assert');
(() => {
    const cache = new LRUCache( 2 /* capacity */ );

    cache.put(1, 1);
    cache.put(2, 2);
    assert(cache.get(1), 1);       // returns 1
    cache.put(3, 3);    // evicts key 2
    assert(cache.get(2), -1);       // returns -1 (not found)
    cache.put(4, 4);    // evicts key 1
    assert(cache.get(1), -1);       // returns -1 (not found)
    assert(cache.get(3), 3);       // returns 3
    assert(cache.get(4), 4);       // returns 4
})();
