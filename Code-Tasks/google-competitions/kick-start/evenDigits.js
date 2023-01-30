//https://codingcompetitions.withgoogle.com/kickstart/round/0000000000050edf/00000000000510ed#analysis
//const fs = require('fs');file system node js
//const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = '100\n42\n11\n1\n2018\n7987156634340652\n702965871293095\n6962144801116520\n3666623883080983\n1555555555555555\n8\n9999999999999999\n6\n5535519839439051\n3137877307050590\n9008291841348166\n5302483055187945\n5378533856171957\n7182957119213397\n4787862520313343\n8204109394255155\n6732705471934514\n5799997825926181\n4157866600669300\n4963229428300959\n4125614164873434\n2932561877034999\n8036788433163446\n780552885549491\n1990870042263186\n4764069126748764\n1828124545879598\n8075465586054011\n1671851338438065\n2\n85419647771341\n8668358280935698\n1195056708458980\n6545542669483249\n9316372616601456\n2539465181402965\n100651904461243\n4\n5\n9\n7604611420325337\n9391463320580764\n7160943477181295\n5955591735128917\n9143514598013447\n5432752312527449\n5003090949547512\n2431075099116550\n7760595273105305\n2734216140456388\n2057336224173566\n6036745952793255\n4218952361575302\n10000000000000000\n10\n9509632766763758\n3050603017337512\n951755743741112\n3\n229946963700348\n4084676069672294\n6568291594823904\n7\n2441964266152308\n8175528205381346\n483405405523501\n109649131252311\n9670483416923973\n1742945014868853\n4825144421047575\n9448225517017876\n2946460542958605\n8077393045243266\n95\n3458080794379945\n7762477047331771\n9088041008951804\n4832466411838698\n9655231154231598\n2934819523768251\n8606100660629102\n5621202970649776\n193629442267272\n4654739348731335\n6225954182470311\n4709774971987577\n9551631511353548\n307622818610536\n4058710989827093\n4713149628252530\n3872135802914471\n885630781798613\n8888888888888889\n7232078666911382\n7726013479865952\n2974289523990319'.trim().split('\n');

const testCases = input.shift();

function solve(int, caseN) {
    if (int <= 10e4) {
        let plusInt = int;
        let minusInt = int;
        let plus = 0;
        let minus = 0;
        while (true) {
            let containsOddDigits = String(plusInt).split('').map(el => el % 2 == 1).includes(true);
            if (containsOddDigits) {
                plusInt++;
                plus++;
            } else {
                break;
            }
        }
        while (true) {
            let containsOddDigits = String(minusInt).split('').map(el => el % 2 == 1).includes(true);
            if (containsOddDigits) {
                minusInt--;
                minus++;
            } else {
                break;
            }
        }
        plus <= minus ? console.log(`Case #${caseN}: ${plus}`) : console.log(`Case #${caseN}: ${minus}`)
    } else if(int <= 10e15) {
        const digits = String(int).split('');
        const isOddDigit = digits.map(el => el % 2 == 1);
        if (isOddDigit.includes(true)) {
            const digitsPlus = digits.map(x => x);
            if (digitsPlus[isOddDigit.indexOf(true)] == 9) {
                if (isOddDigit.indexOf(true) == 0) {
                    digitsPlus.splice(0, 0, 2)
                    for (let x = 1; x < digitsPlus.length; x++) {
                        digitsPlus[x] = 0
                    }
                } else {
                    digitsPlus[isOddDigit.indexOf(true) - 1]++
                    while (digitsPlus[isOddDigit.indexOf(true) - 1] % 2 == 1) {
                        digitsPlus[isOddDigit.indexOf(true) - 1]++
                    }
                    for (let x = isOddDigit.indexOf(true); x < digitsPlus.length; x++) {
                        digitsPlus[x] = 0
                    }
                }
            } else {
                digitsPlus[isOddDigit.indexOf(true)]++;
                for (let index = isOddDigit.indexOf(true) + 1; index < digits.length; index++) {
                    digitsPlus[index] = 0;
                }
            }
            const digitsMinus = digits.map(x => x);
            digitsMinus[isOddDigit.indexOf(true)]--;
            for (let index = isOddDigit.indexOf(true) + 1; index < digits.length; index++) {
                digitsMinus[index] = 8;
            }
            if (Number(digitsPlus.join('') < Number.MAX_SAFE_INTEGER - 1)) {
                digitsPlus.join('') - int <= int - digitsMinus.join('') ? console.log(`Case #${caseN}: ${digitsPlus.join('') - int}`) : console.log(`Case #${caseN}: ${int - digitsMinus.join('')}`);
            } else {
                BigInt(digitsPlus.join('')) - BigInt(int) <= BigInt(int) - BigInt(digitsMinus.join('')) ? console.log(`Case #${caseN}: ${String(BigInt(digitsPlus.join('')) - BigInt(int))}`) : console.log(`Case #${caseN}: ${String(BigInt(int) - BigInt(digitsMinus.join('')))}`);
            }
        } else {
            console.log(`Case #${caseN}: 0`)
        }
    }
}

for (let cases = 0; cases < testCases; cases++) {
    solve(input[cases], cases + 1);
}