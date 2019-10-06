// Write a program to find Median of the given Array? WORKS ONLY FOR ORDERED ARRAYS
function med(arr) {
    let a = arr.length;
    if (a % 2 == 1) {
        console.log(arr[(a - 1) / 2]);
    } else {
        console.log((arr[a / 2] + arr[(a - 2) / 2]) / 2);
    }
}