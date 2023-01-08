function BigNumber(a, op, b) {
    let aArray;
    let resultArray = [];
    if (typeof a == 'string' || a < 2**52) {
        aArray = String(a).split('').reverse();
    } else {
        console.error('First parameter input must be a number in string type OR a number type with value below 9,007,199,254,740,990')
    }
    
    function add(c) {
        const reverseResult = [];
        if (typeof c == 'string' || c < 2**52) {
            let cArray = String(c).split('').reverse();
            if (cArray.length > aArray.length) {
                const transitArray = cArray.map(x => x);
                cArray = aArray.map(x => x);
                aArray = transitArray.map(x => x);
            }
            console.log(aArray, cArray)
            let remainder = 0;
            for (let index = 0; index < aArray.length; index++) {
                if (cArray[index] == undefined) {
                    const summedDigits = String(Number(aArray[index]) + remainder);
                    if (summedDigits.length == 2) {
                        reverseResult[index] = summedDigits[1];
                        remainder = Number(summedDigits[0]);
                    } else {
                        reverseResult[index] = summedDigits;
                        remainder = 0;
                    }
                } else {
                    const summedDigits = String(Number(aArray[index]) + Number(cArray[index]) + remainder);
                    if (summedDigits.length == 2) {
                        reverseResult[index] = summedDigits[1];
                        remainder = Number(summedDigits[0]);
                    } else {
                        reverseResult[index] = summedDigits;
                        remainder = 0;
                    }
                }
            }
            if (remainder != 0) {
                reverseResult.push(remainder)
            }
        } else {
            console.error('Third parameter input must be a number in string type or a number type with value below 9,007,199,254,740,990')
        }
        console.log(reverseResult)
        resultArray = reverseResult.reverse().map(x => String(x));
    }

    function subtract(c) {
        let isResultNegative = false;
        const reverseResult = [];
        if (typeof c == 'string' || c < 2**52) {
            let cArray = String(c).split('').reverse();
            if (cArray.length > aArray.length) {
                isResultNegative = true;
                const transitArray = cArray.map(x => x);
                cArray = aArray.map(x => x);
                aArray = transitArray.map(x => x);
            } else if (cArray.length == aArray.length) {
                // se carray è maggiore di aarray allora condition = true
                for (let index = cArray.length - 1; index >= 0; index--) {
                    if (cArray[index] < aArray[index]) {
                        break;
                    } else if (cArray[index] > aArray[index]) {
                        isResultNegative = true;
                        const transitArray = cArray.map(x => x);
                        cArray = aArray.map(x => x);
                        aArray = transitArray.map(x => x);
                        break;
                    }
                }
            }
            console.log(aArray, cArray)
            for (let index = 0; index < aArray.length; index++) {
                if (cArray[index] == undefined) {
                    reverseResult[index] = String(aArray[index]);
                } else {
                    if (aArray[index] >= cArray[index]) {
                        reverseResult[index] = Number(aArray[index]) - Number(cArray[index]);
                    } else {
                        if (aArray[index + 1] > 0) {
                            aArray[index + 1]--;
                            reverseResult[index] = Number('1' + aArray[index]) - Number(cArray[index]);
                        } else {
                            const indexOfFirstNonNullEl = aArray.findIndex((el, x) => x > index && el != 0);
                            aArray[indexOfFirstNonNullEl]--;
                            for (let x = index + 1; x < indexOfFirstNonNullEl; x++) {
                                aArray[x] = '9';
                            }
                            reverseResult[index] = Number('1' + aArray[index]) - Number(cArray[index]);
                        }
                    }
                }
            }
        } else {
            console.error('Third parameter input must be a number in string type or a number type with value below 9,007,199,254,740,990')
        }
        while (reverseResult[reverseResult.length - 1] == 0) {
            reverseResult.pop();
        }
        if (isResultNegative) {
            reverseResult.push('-')
        }
        console.log(reverseResult);
        resultArray = reverseResult.reverse().map(x => String(x));
    }

    switch (op) {
        case '+':
            add(b);
            break;
        case '-':
            subtract(b)
            break;
        default:
            console.error('second parameter must be a string between +, -, * and / (* and / to write)');
    }
    console.log(resultArray.join(''))
}

BigNumber('111005', '-', '1110337') // 152
