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
    const longStringChars = [s1, s2];
    for (let charNr = longStringChars.length; charNr < 50; charNr++) {
        let xi = (a * ord(longStringChars[charNr - 1] + b * ord(longStringChars[charNr - 2]) + c) % d;
        let si = char(97 + (xi % 26));
    }
    const longString = longStringChars.join('');
}

main(1, 5, ['axpaj', 'apxaj', 'dnrbt', 'pjxdn', 'abd'], 'a', 'a', 50, 1, 1, 1, 30);
