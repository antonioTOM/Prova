// https://codingcompetitions.withgoogle.com/kickstart/round/0000000000050edf/0000000000051004
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const firstASCII = 97;
function char(ord) {
    return alphabet[ord - firstASCII];
}
function ord(char) {
    return alphabet.indexOf(char) + firstASCII;
}

function main(t, l, words, s1, s2, n, a, b, c, d) {
    const xValues = [ord(s1), ord(s2)];
    const longStringChars = [s1, s2];
    for (let charNr = longStringChars.length; charNr < n; charNr++) {
        let xi = (a * xValues[charNr - 1] + b * xValues[charNr - 2] + c) % d;
        let si = char(97 + (xi % 26));
        xValues.push(xi);
        longStringChars.push(si);
    }
    const validWords = [];
    for (let index = 0; index < l; index++) {
        validWords.push(words[index].split(''));
    }
    let scrambledWordsInLongString = 0;
    for (let index = 0; index < validWords.length; index++) {
        const element = [validWords[index][0], validWords[index][validWords[index].length - 1]];
        const firstCharIndexes = longStringChars.map((el, index) => {if (el === element[0]) {return index}}).filter(el => el !== undefined);
        const lastCharIndexes = longStringChars.map((el, index) => {if (el === element[1]) {return index}}).filter(el => el !== undefined);
        let runTime = lastCharIndexes.length;
        for (let index2 = 0; index2 < runTime; index2++) {
            const el = lastCharIndexes[index2];
            let runTime2 = firstCharIndexes.length;
            for (let index3 = 0; index3 < runTime2; index3++) {
                if (el > firstCharIndexes[index3]) {
                    if (el - firstCharIndexes[index3] === validWords[index].length - 1) {
                        //console.log([validWords[index], element, firstCharIndexes[index3], el])
                        let wordInnerCharsStr = validWords[index].slice(1, validWords[index].length - 1).sort().join('');
                        let longStringSubCharsStr = longStringChars.slice(firstCharIndexes[index3] + 1, el).sort().join('');
                        if (wordInnerCharsStr === longStringSubCharsStr) {
                            scrambledWordsInLongString++;
                            //console.log(index3, index);
                        }
                        //console.log(wordInnerCharsStr, longStringSubCharsStr)
                    }
                } else {
                    runTime2 = index3;
                }
                //console.log(index, index3, el, lastCharIndexes, firstCharIndexes)
            }
        };
        //console.log([validWords[index].length, firstCharIndexes, lastCharIndexes])
    }
    return `Case #${t}: ${scrambledWordsInLongString}`;
}

console.log(main(1, 5, 'axpaj apxaj dnrbt pjxdn abd'.split(' '), 'a', 'a', 50, 1, 1, 1, 30));
