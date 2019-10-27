// Write a program to find the minimum and maximum values that can be calculated by summing exactly
// four of the five integers. Then print the respective minimum and maximum values as a single line of
// two space-separated long integers.
// Example, Input: [1, 2, 3, 4, 5]
// Output; [10, 14]

let array = [1, 2, 3, 4, 5]
let smallSumArr = []
let largeSumArr = []
let arrMax = 0
let arrMin = 0

const max = () => {
    arrMax = array[0]
    for (i = 0; i < array.length; i++) {
        if (arrMax < array[i]) {
            arrMax = array[i]
        }
    }
    // console.log(arrMax)
    return (arrMax)
}

smallSumArr = array
smallSumArr.splice(array.indexOf(max()), 1)
smallSumArr.map((val) => arrMin += val)
console.log('min in array -> ',arrMin)


const min = () => {
    arrMin = array[0]
    for (i = 0; i < array.length; i++) {
        if (arrMin > array[i]) {
            arrMin = array[i]
        }
    }
    // console.log(arrMin)
    return (arrMin)
}

largeSumArr = array
largeSumArr.splice(array.indexOf(min()), 1)
largeSumArr.map((val) => arrMax += val)
console.log('max in array -> ',arrMax)