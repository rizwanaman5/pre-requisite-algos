// Write An Algorithm using Javascript to Reverse Array Elements without using Built in Function, with using temp array?

let reversedArr = []

const reverse = (arr) => {
    for (i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i])
    }
    return reversedArr
}

console.log(reverse([1, 2, 3, 4, 5, 6]))
