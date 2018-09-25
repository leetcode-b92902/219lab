/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    const mapping = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz",
    };
    let prefixSet = new Set([""]);
    for (const c of digits) {
        const newPrefixSet = new Set();
        const newDigits = mapping[c];
        for (const p of prefixSet) {
            for (const d of newDigits) {
                newPrefixSet.add(p + d);
            }
        }
        prefixSet = newPrefixSet;
    }
    return Array.from(prefixSet);
};
