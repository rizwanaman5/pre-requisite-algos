// Write a program to generate Prime Numbers less than N.
function generatePrime(num) {
    var isPrime;
    for (let i = 2; i <= num; i++) {
        isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}