// Write a program to find Median of the given Array? WORKS ONLY FOR ORDERED ARRAYS

/**
 *? The input variable is. Change this array for different inputs
 ** this has two functions, one to sort an array in accending order and the other to find the median of the new array.
 */
let input = [4, 5, 3, 9, 7, 40, 4, 6, 7, 32, 56, 12, 11, 5, 6]

// this is new array on which the median is calculated, it is the same array as input but has been sorted in accending order
let sortedArr = []
var a = input

// function to find the median of a sorted array
function med(arr) {
    let a = arr.length;
    if (a % 2 == 1) {
        console.log(arr[(a - 1) / 2]);
    } else {
        console.log((arr[a / 2] + arr[(a - 2) / 2]) / 2);
    }
}

// Function to extract the smallest element in the array and push it into the new array called sortedArr
const sortArr = () => {

    let b = a[0]

    for (let i = 0; i < a.length; i++) {
        a[i] < b ? b = a[i] : b
        // console.log(b)
    }
    sortedArr.push(b)
    // a = a.filter(e => e != b)
    a.splice(a.indexOf(b), 1)
}

// a loop to keep on running the sortArr function till the time the whole array has been sorted.
do {
    sortArr()
} while (a.length != 0)

console.log(sortedArr)
med(sortedArr)
