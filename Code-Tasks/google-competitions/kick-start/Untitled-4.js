const input = '1\n5\naxpaj apxaj dnrbt pjxdn abd\na a 50 1 1 1 30'.trim().split('\n');

const testCases = input.shift();
const casesInput = [];
for (let x = 0; x < input.length; x += 3) {
    casesInput.push(input.slice(x, x + 3));
}

function solve(t, l, words, s1, s2, n, a, b, c, d) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const firstASCII = 97;
    function char(ord) {
        return alphabet[ord - firstASCII];
    }
    function ord(char) {
        return alphabet.indexOf(char) + firstASCII;
    }
    const xValues = [ord(s1), ord(s2)];
    const longStringChars = [s1, s2];
    for (let charNr = longStringChars.length; charNr < n; charNr++) {
        let xi = (BigInt(a) * BigInt(xValues[charNr - 1]) + BigInt(b) * BigInt(xValues[charNr - 2]) + BigInt(c)) % BigInt(d);
        let si = char(97 + (Number(xi) % 26));
        xValues.push(xi);
        longStringChars.push(si);
    }
    let scrambledWordsInLongString = 0;
    for (const word of words) {
        const firstChar = word[0];
        const lastChar = word[word.length - 1];
        const innerChars = word.slice(1, word.length - 1).split('').sort().join('');
        const longStringFirstCharIndexes = longStringChars.map((el, index) => el == firstChar ? index : undefined).filter(x => x != undefined);
        for (const firstCharIndex of longStringFirstCharIndexes) {
            const possibleLastChar = longStringChars[firstCharIndex + word.length - 1];
            const possibleInnerChars = longStringChars.slice(firstCharIndex + 1, firstCharIndex + word.length - 1).sort().join('');
            if (possibleLastChar == lastChar && possibleInnerChars == innerChars) {
                scrambledWordsInLongString++;
                break;
            }
        }
    }
    console.log(`Case #${t}: ${scrambledWordsInLongString}`)
}

for (let x = 1; x <= testCases; x++) {
    const caseInput = casesInput[x - 1];
    const wordsInput = caseInput[1].split(' ');
    const lastLineInput = caseInput[2].split(' ')
    solve(x, Number(caseInput[0]), wordsInput, lastLineInput[0], lastLineInput[1], lastLineInput[2], lastLineInput[3], lastLineInput[4], lastLineInput[5], lastLineInput[6])
}