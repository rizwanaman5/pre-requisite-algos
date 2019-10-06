// Write a program to find GCD (Greatest Common Divisor) or HCF (Highest Common Factor) using recursion.
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