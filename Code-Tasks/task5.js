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
    let scrabledWordsInLongString = 0;
    for (let index = 0; index < validWords.length; index++) {
        const element = [validWords[index][0], validWords[index][validWords[index].length - 1]];
        const firstCharIndexes = longStringChars.map((el, index) => {if (el === element[0]) {return index}}).filter(el => el !== undefined);
        const lastCharIndexes = longStringChars.map((el, index) => {if (el === element[1]) {return index}}).filter(el => el !== undefined);
        lastCharIndexes.forEach((el, index2) => {
            let runTime = firstCharIndexes.length;
            for (let index3 = 0; index3 < runTime; index3++) {
                if (el > firstCharIndexes[index3]) {
                    if (el - firstCharIndexes[index3] === validWords[index].length - 1) {
                        if (condition) {
                            
                        }
                    }
                } else {
                    runTime = index3;
                }
            }
        });
        //console.log([validWords[index].length, firstCharIndexes, lastCharIndexes])
    }
}

main(1, 5, ['axpaj', 'apxaj', 'dnrbt', 'pjxdn', 'abd'], 'a', 'a', 50, 1, 1, 1, 30);
