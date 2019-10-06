
// and Generate ‘N’ Prime Numbers in given range.        **NOT DONE*************************************
function printNPrime() {

}

// Write a program given an array of ‘N’ numbers, find LCM of it.
function lcmArr(arr) {
  function max(arr) {
    let count = arr[0]
    for (i = 0; i < arr.length; i++) {
      if (count < arr[i]) {
        count = arr[i]
      }
    }
    return count;
  }

  let a = max(arr);

  for (let i = 0; i < arr.length; i++) {

  }
}

// Write a program to find the roots of a quadratic equation 
// function findRoots(xSquare, x, constant) {
//   console.log('Root 1 :', ((-1 * x + Math.sqrt((x ^ 2) - (4 * xSquare * constant))) / 2 * xSquare))
//   console.log('Root 2 :', ((-1 * x - Math.sqrt((x ^ 2) - (4 * xSquare * constant))) / 2 * xSquare))
// }
// findRoots(1, 0, -4)
