let matrice = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 1]
]

let sumMainDiagonal = 0;
let sumSecDiagonal = 0;
let sumCol = [];
let sumRow = [];

// to check the dimensions of the matrice. if they are not the same, the matchMatrice function won't be executed at all
const verifyMatrice = () => {
    let firstMatrice = {
        length: matrice.length,
        elementLength: matrice.map(e => e.length)
    }
    // console.log(firstMatrice);

    if ((firstMatrice.elementLength.map(e => e == firstMatrice.length)).includes(false) == false) {
        console.log(true);
        return true
    } else {
        console.log('invalid matrice --> not a Square Matrice');
        return false
    }

}
// verifyMatrice() // test

const mainDiagonal = () => {
    matrice.map((val, index) => {
        val.map(() => {
            sumMainDiagonal += val[index]
        })
    })
    return sumMainDiagonal / 4
    // console.log(sumMainDiagonal/4)
}
// console.log(mainDiagonal())

const secDiagonal = () => {
    for (let i = matrice.length; i > 0; i--) {
        // console.log('first',matrice[i])
        for (let j = 0; j < i.length; j++) {
            // sumSecDiagonal += matrice[i][i]
            console.log('sec', matrice)
        }
    }
    // return sumSecDiagonal / 4
}
console.log(secDiagonal())
