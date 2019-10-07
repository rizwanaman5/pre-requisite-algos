// Write a program to find whether given number is an Armstrong number or not?

/**
 * Armstrong Number is a case of the Narcissistic number. A narcissistic number 
 * in a given number base is a number that is the sum of its own digits each raised 
 * to the power of the number of digits.
 */

const num = 123
let a = String(num)

// Splitting the number into an array, we need to first turn the number into a string to do that.
// That is what the second step is for -> .split('') only works for Strings..
let numArr = a.split("")
console.log(numArr)

// Raise each of the elements of the array to the 3rd power -> another way to do this is [ Math.pow(e, 3) ]
let arrCube = numArr.map(e => Number(e) ** 3)
console.log(arrCube)

let arr = arrCube
let sum = 0

// Adding up all the elements of the array 
arr.map((e) => {
    sum += e
})

// Checking whether the sum equals the original number or not. If so, it is an Armstrong Number.
const checkArmstrongNum = () => {
    if (sum == num) {
        console.log('congratulations, you have got a armstrong number ->', num)
    } else {
        console.log(`sorry, ${num} is not a armstrong number. Please choose a new one.`)
    }
}

checkArmstrongNum()