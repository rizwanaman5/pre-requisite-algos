// Write a program to produce the sum of integers upto given input n

let sum = 0;

const sumTillN = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    console.log(sum)
    return sum
}

sumTillN(-10)