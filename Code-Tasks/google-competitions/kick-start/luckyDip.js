const fs = require('fs');

const input = fs.readFileSync('/workspaces/Prova/Code-Tasks/google-competitions/kick-start/tests.txt', 'utf8').trim().split('\n');
//console.log(input);
const testCases = input.shift();
const firstLine = input.filter((el, index) => {if (index % 2 === 0) return el}).map(el => el.split(' '));
const secondLine = input.filter((el, index) => {if (index % 2 == 1) return el}).map(el => el.split(' '));


function solve(t, s, rd, nrs) {
    const possibilities = rd + 1;
    const avg = nrs.reduce((a, b) => a + b) / nrs.length;
    const greatNrs = nrs.filter(x => x >= avg);
    const smallNrs = nrs.filter(x => x < avg);
    const smallGeneralChance = (smallNrs.length / nrs.length) ** possibilities;
    const greatGeneralChance = 1 - smallGeneralChance;
    const smallChance = smallGeneralChance !== 0 ? smallGeneralChance / smallNrs.length : 0;
    const greatChance = greatGeneralChance / greatNrs.length;
    const smallExpValue = smallChance !== 0 ? smallChance * smallNrs.reduce((a, b) => a + b) : 0;
    const greatExpValue = greatChance * greatNrs.reduce((a, b) => a + b);
    const expValue = smallExpValue + greatExpValue;
    console.log({rd, nrs, possibilities, avg, greatNrs, smallNrs, smallGeneralChance, greatGeneralChance, smallChance, greatChance, smallExpValue, greatExpValue, expValue});
    //console.log(`Case #${t}: ${expValue}`);
}

for (let x = 0; x < testCases; x++) {
    solve(x + 1, Number(firstLine[x][0]), Number(firstLine[x][1]), secondLine[x].map(el => Number(el)));
}

console.log('________________________________');

function solve2(t, s, rd, nrs) {
    const possibilities = rd + 1n;
    const avg = nrs.reduce((a, b) => a + b) * 10n**6n / BigInt(nrs.length);
    const greatNrs = nrs.filter(x => x * 10n**6n >= avg);
    const smallNrs = nrs.filter(x => x * 10n**6n < avg);
    const smallGeneralChance = (BigInt(smallNrs.length) * 10n**6n / BigInt(nrs.length)) ** possibilities;
    const greatGeneralChance = 10n**6n - smallGeneralChance;
    const smallChance = smallGeneralChance !== 0n ? smallGeneralChance / BigInt(smallNrs.length) : 0n;
    const greatChance = greatGeneralChance / BigInt(greatNrs.length);
    const smallExpValue = smallChance !== 0n ? smallChance * smallNrs.reduce((a, b) => a + b) : 0n;
    const greatExpValue = greatChance * greatNrs.reduce((a, b) => a + b)
    const expValue = smallExpValue + greatExpValue;
    const finalExpValue = `${String(expValue).slice(0, -6)}.${String(expValue).slice(-6, String(expValue).length)}`;
    console.log({rd, nrs, possibilities, avg, greatNrs, smallNrs, smallGeneralChance, greatGeneralChance, smallChance, greatChance, smallExpValue, greatExpValue, expValue, finalExpValue});
    //console.log(`Case #${t}: ${finalExpValue}`);
}

for (let x = 0; x < testCases; x++) {
    solve2(x + 1, BigInt(firstLine[x][0]), BigInt(firstLine[x][1]), secondLine[x].map(el => BigInt(el)));
}