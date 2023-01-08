//https://hackernoon.com/top-three-coding-challenges-for-mid-level-javascript-developers

let string = "javascript";
let n = 2;

let finalString = undefined;

function rotateString(el, nr) {
    finalString = el.substring(nr, el.length);
    finalString += el.substring(0, nr);
}

rotateString(string, n);

console.log(finalString);