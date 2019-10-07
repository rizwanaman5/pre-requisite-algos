const factorial = (a) => {
    return a <= 2 ? a : a * factorial(a - 1)
}
console.log(factorial(5))


const combination = (n, r) => {
    return factorial(n) / ((factorial(r)) * factorial(n - r))
}
console.log(combination(10, 2))


const permutation = (n, r) => {
    return factorial(n) / factorial(n - r)
}
console.log(permutation(10, 3));
