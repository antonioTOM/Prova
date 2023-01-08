function printEven(start, end) {
    const evenNumbers = [];
    for (start; start <= end; start++) {
        if (start % 2 == 0) {
            evenNumbers.push(start);
        }
    }
    return evenNumbers;
}

console.log(printEven(0, 10));