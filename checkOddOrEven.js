// Write a program to Check whether a given input is Even or odd using recursion
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
