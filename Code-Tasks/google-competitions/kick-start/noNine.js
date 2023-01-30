//https://codingcompetitions.withgoogle.com/kickstart/round/0000000000050ff4/0000000000051183
//analisi più accurata in futuro, per il momento resterà in sospeso questo problema
const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const testCases = input.shift();
const casesInput = input.map(x => x.split(' '));

function solve(t, f, l) {
    let invalidNrs = 0;
    let firstMultiple = f;
    while (firstMultiple % 9 !== 0) {
        firstMultiple++;
    }
    for (let multiple = firstMultiple; multiple <= l; multiple += 9) {
        if (!String(multiple).includes('9')) {
            invalidNrs++;
        }
    }
    const nrDigits = f.split('').map(x => Number(x));
    for (let x = 0; x < l.length - f.length; x++) {
        nrDigits.splice(0, 0, 0);
    }
    if (nrDigits[0] < l[0]) {
        if (nrDigits.includes(9)) {
            const indexOf9 = nrDigits.indexOf(9);
            nrDigits[indexOf9 - 1]++;
            for (let index = indexOf9; index < nrDigits.length; index++) {
                nrDigits[index] = 0;
            }
            //invalidNrs += ...
        } else {
            while (!nrDigits.includes(9)) {
                nrDigits[nrDigits.length - 1]++;
            }
        }
    }

    const validNrs = l - f + 1 - invalidNrs;
    console.log(`Case #${t}: ${validNrs}`);
}

for (let x = 0; x < testCases; x++) {
    solve(x + 1, casesInput[x][0], casesInput[x][1]);
}