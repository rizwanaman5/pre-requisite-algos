// Write a  program for swapping of two arrays
function swapArrays(arr1, arr2) {
    let a = arr1;
    let b = arr2;
    let c;

    c = a;
    a = b;
    b = c;

    console.log('arr1 =', a);
    console.log('arr2 =', b)
}
