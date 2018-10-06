/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (words.length == 0) {
        return [];
    }
    const wLen = words[0].length;
    if (wLen == 0) {
        return Array.from(s, (_, i) => i);
    }
    const wordCount = new Map();
    for (const w of words) {
        wordCount.set(w, (wordCount.get(w) || 0) + 1);
    }
    const markMap = new Map(); // index -> Set
    for (const w of wordCount.keys()) {
        let i = s.indexOf(w);
        if (i == -1) {
            return [];
        }
        do {
            let marks = markMap.get(i);
            if (marks == null) {
                marks = new Set();
                markMap.set(i, marks);
            }
            marks.add(w);
            i = s.indexOf(w, i + 1);
        } while (i != -1);
    }    
    function traverse(i, countLeft) {
        if (countLeft.size == 0) {
            return true;
        }
        if (!markMap.has(i)) {
            return false;
        }
        for (const w of markMap.get(i)) {
            if (!countLeft.has(w)) {
                continue;
            }
            const wCount = countLeft.get(w);
            if (wCount == 1) {
                countLeft.delete(w);
            } else {
                countLeft.set(w, wCount - 1);
            }
            if (traverse(i + wLen, countLeft)) {
                return true;
            }
            countLeft.set(w, wCount);
        }
        return false;
    }
    
    return Array.from(markMap.keys()).filter((idx) => {
        return traverse(idx, new Map(wordCount));
    });
};
