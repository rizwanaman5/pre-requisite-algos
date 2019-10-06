// Write a program find GCD of the array elements given an array of numbers
function hcfArr(arr) {
    function hcf(a, b) {
        if (a == 0) {
            return b;
        } else if (b == 0) {
            return a;
        } else if (a > b) {
            return hcf(b, a % b);
        } else {
            return hcf(a, b % a);
        }
    }

    let a = hcf(arr[0], arr[1])
    for (let i = 2; i < arr.length; i++) {
        a = hcf(a, arr[i])
    } console.log(a)
}