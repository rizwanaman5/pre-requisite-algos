// Write a program to check if the given string is palindrome or not

let word = "wow"

const palindrome = () => {
    let reverse = word.split('').reverse().join('')
    console.log(reverse)

    word == reverse ? console.log(word, 'is a palindrome') : console.log(word, 'is not a palindrome')
}

palindrome()