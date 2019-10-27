// Write a program to accept a matrix and determine whether it is a sparse matrix or not?. 
// A sparse matrix is a matrix, which has more zero elements than nonzero elements

let matrice = [
    [-1, 0, 1, 1],
    [0, 1, 0, 1],
    [1, 1, 1, 0],
    [0, 1, 1, 1]
]

let zero = 0;
let nonZero = 0;


const verifyMatrice = () => {
    return matrice.map((val) => val.length == matrice[0].length)
}

const checkZeroCount = (num) => {
    return num == 0 ? zero += 1 : nonZero += 1
}

const declareResult = () => {
    zero > nonZero ? console.log('\nthe matrice is a sparse matrice') : console.log('\nNot a sparse matrice')
}

const countMatrice = () => {
    if (!verifyMatrice().includes(false)) {
        matrice.map((val) => {
            val.map((e) => (
                checkZeroCount(e)
            ))
        })
        declareResult()
    } else {
        console.log('\nInvalid Matrice provided | \nplease check the rows and columns')
    }
}
countMatrice()
