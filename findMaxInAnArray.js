// Write a program to find the maximum number in an array using function
function max(array) {
    let count = array[0]
    for (i = 0; i < array.length; i++) {
        if (count < array[i]) {
            count = array[i]
        }
    }
    console.log(count)
}