// Write a program to produce the sum of series as below
//  1! + 2! + 3! + 4! + 5! + ... + n!

let sum = 0;

const factorial = (n) => {
    return n > 1 ? n * factorial(n-1) : 1
}
// console.log(factorial(5))

const sumTillN = (n) => {
    for (let i = 1; i <= n; i++) {
        sum += factorial(i)
    }
    console.log(sum)
    return sum
}

sumTillN(4)