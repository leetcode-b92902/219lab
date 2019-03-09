/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exactMatch = new Map(wordlist.map(w => [w, w]));

    const ignoreCase = (w) => w.toLowerCase();
    const ignoreVowel = (w) => ignoreCase(w).replace(/[aeiou]/g, "-");

    const reversed = wordlist.slice().reverse()
    const insensitiveMatch = new Map(reversed.map(w => [ignoreCase(w), w]));
    const ignoreVowelMatch = new Map(reversed.map(w => [ignoreVowel(w), w]));

    return queries.map(q => {
        return exactMatch.get(q) || 
            insensitiveMatch.get(ignoreCase(q)) ||
            ignoreVowelMatch.get(ignoreVowel(q)) ||
            "";
    });
};

console.log(spellchecker(["Foo"], ["Foo"]));
console.log(spellchecker(["Foo"], ["foo"]));
console.log(spellchecker(["Foo", "Fea"], ["fee"]));
console.log(spellchecker(["Foo"], ["bar"]));

let wordlist = ["KiTe","kite","hare","Hare"];
let queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"];
let expect = ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"];
let actual = spellchecker(wordlist, queries);
if (actual.join() != expect.join()) {
    for (let i = 0; i < expect.length; ++i) {
        if (actual[i] != expect[i]) {
            console.log(`expect: ${expect[i]} actual: ${actual[i]}`);
        }
    }
    throw new Error();
}
