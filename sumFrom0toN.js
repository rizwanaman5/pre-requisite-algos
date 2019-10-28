// Write a program to produce the sum as below
//  (1) + (1+2) + (1+2+3) + (1+2+3+4) + ... + (1+2+3+4+...+n)

let sum = 0;

const sumTillN = (n) => {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= i; j++) {
            sum += j
        }
    }
    console.log(sum)
    return sum
}

sumTillN(4)