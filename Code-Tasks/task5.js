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
    
}

main(1, 5, ['axpaj', 'apxaj', 'dnrbt', 'pjxdn', 'abd'], 'a', 'a', 50, 1, 1, 1, 30);