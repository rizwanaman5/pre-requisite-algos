// Write a program  to find Mean of given Array Elements?

/**
 * To find the Mean of an array, we first need to find the sum and then divide it by the number of elements
 * arr is the input to the function
 */
let arr = [1, 6, -6, 3, 7, -8, -9, 2, 5, 7, -23, 0, -56]

function sumArray() {
    let a = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        a = a + arr[i];
    }
    console.log('sum of array -> ', a);
    console.log('mean of array -> ', a / (arr.length));

}

sumArray()

