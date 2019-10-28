// Write a program to produce the sum of squares upto given n value
// (1*1) + (2*2) + (3*3) + (4*4) + (5*5) + ... + (n*n)

let sum = 0;

const sumTillN = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += (i*i)
    }
    console.log(sum)
    return sum
}

sumTillN(3)