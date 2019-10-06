// Write a program to given input Check whether  Even or odd.
function check(num) {
    if (num > 1) {
        num = num - 2;
        check(num);
    } else if (num == 1) {
        console.log("odd");
    } else {
        console.log("even");
    }
}