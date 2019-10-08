// Write a program to remove duplicate element in an array

let arr = [1, 2, 2, 4, 5, 6, 3, 3, 4, 2, 6, 8, 6]

const removeDuplicate = () => {
    let newArr = arr.filter((element, index) => arr.indexOf(element) === index)
    console.log(newArr)
}

removeDuplicate()