/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if (denominator == 0) {
        return NaN;
    }
    if (numerator % denominator == 0) {
        return String(numerator / denominator);
    }
    const strParts = [];
    let sign = 1;
    if (numerator < 0) {
        numerator = -numerator;
        sign = -1;
    }
    if (denominator < 0) {
        denominator = -denominator;
        sign *= -1;
    }
    if (sign == -1) {
        strParts.push('-');
    }
    strParts.push(String(Math.floor(numerator / denominator)));
    strParts.push('.');

    let remainder = numerator % denominator;
    const cycleDetector = new Map();
    while (remainder > 0) {
        if (cycleDetector.has(remainder)) {
            const cycleStart = cycleDetector.get(remainder);
            strParts[cycleStart] = '(' + strParts[cycleStart];
            strParts.push(')');
            break;
        }
        cycleDetector.set(remainder, strParts.length);
        remainder *= 10;
        const newDigit = Math.floor(remainder / denominator);
        strParts.push(String(newDigit));
        remainder = remainder % denominator;
    }
    return strParts.join('');
};

console.log(fractionToDecimal(1, 2), "0.5");
console.log(fractionToDecimal(2, 1), "2");
console.log(fractionToDecimal(2, 3), "0.(6)");
console.log(fractionToDecimal(1, 7), "0.(142857)");
console.log(fractionToDecimal(-50, 8), "-6.25");
console.log(fractionToDecimal(-22, -2), "11");
console.log(fractionToDecimal(22, -2), "-11");
console.log(fractionToDecimal(1, -7), "-0.(142857)");
console.log(fractionToDecimal(-1, 7), "-0.(142857)");
console.log(fractionToDecimal(0, -5), "0");
console.log(fractionToDecimal(0, 0), "NaN");
