function convertDecimalToBinary(x) {
    const binaryDigits = [];
    for (x; x > 0; x = Math.floor(x/2)) {
        binaryDigits.push(x%2);
    }
    return binaryDigits.reverse().join('');
}

function getBinariesInInterval(start, end) {
    const binaryNumbers = [];
    for (start; start <= end; start++) {
        binaryNumbers.push(convertDecimalToBinary(start));
    }
    return binaryNumbers.join('        ')
}

console.log(convertDecimalToBinary(/** number */) /** or getBinariesInInterval(interval) */)