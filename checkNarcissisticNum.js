// Write a program to find whether given number is a Narcissistic number 
/**
 * A narcissistic number is a given number base is a number that 
 * is the sum of its own digits each raised to the power of the 
 * number of digits.
 * 
 * It has the same process as that of the Armstrong Number, just that the elements have
 * to be raised to the power of number of digits, which here is the length of the array.
 */

const num = 370
let a = String(num)

// Splitting the number into an array, we need to first turn the number into a string to do that.
// That is what the second step is for -> .split('') only works for Strings..
let numArr = a.split("")
console.log(numArr)

// Raise each of the elements of the array to the power of the number of digits
let arrPow = numArr.map(e => Number(e) ** numArr.length)
console.log(arrPow)

let arr = arrPow
let sum = 0

// Adding up all the elements of the array 
arr.map((e) => {
    sum += e
})

// Checking whether the sum equals the original number or not. If so, it is an Armstrong Number.
const checkArmstrongNum = () => {
    if (sum == num) {
        console.log('congratulations, you have got a Narcissistic number ->', num)
    } else {
        console.log(`sorry, ${num} is not a Narcissistic number. Please choose a new one.`)
    }
}

checkArmstrongNum()