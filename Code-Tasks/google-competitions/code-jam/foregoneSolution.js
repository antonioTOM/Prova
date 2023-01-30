// https://codingcompetitions.withgoogle.com/codejam/round/0000000000051705/0000000000088231#problem
function solve(t, n) {
    for (let y = 1; y <= t; y++) {
        let a;
        let b;
        for (let x = 1; x < n[y - 1]; x++) {
            if (!String(x).includes(4)) {
                if (!String(n[y - 1] - x).includes(4)) {
                    a = x;
                    b = n[y - 1] - x;
                    break;
                }
            } 
        }
        console.log(`Case #${y}: ${a} ${b}`)
    }
}

solve(3, [4, 940, 4444])