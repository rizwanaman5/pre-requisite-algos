// Write a program to find power of a number using recursion

// This logic does not use recursion
const pow = (num, pow) => {
    let result = 1

    if (num == 1) {
        return 1
    } else {
        for (let i = 0; i <= pow; i++) {
            result *= num
        }
        console.log(result)
    }
}
pow(2, 4)



