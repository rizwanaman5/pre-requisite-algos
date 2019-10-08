// Write a program to Program to calculate the Combinations and Permutations!
// Combination means way of selecting a things or particular item into group or sets.
// nCr=n!/r!(n-r)!.
// Permutations means possible way of rearranging in the group or set in the particular order.
// nPr=n!/(n-r)!

/**
 * the most important thing in combinations and permutations is the Factorial function.
 */
const factorial = (a) => {
    return a <= 2 ? a : a * factorial(a - 1)
}
console.log(factorial(5))

// Combination or nCr -> n!/r!(n-r)! |  so we have to call the factorial function quite a few times.
const combination = (n, r) => {
    return factorial(n) / ((factorial(r)) * factorial(n - r))
}
console.log(combination(10, 2))

// Permutations or nPr -> n!/(n-r)! | similar procedure to combinations.
const permutation = (n, r) => {
    return factorial(n) / factorial(n - r)
}
console.log(permutation(10, 3));
