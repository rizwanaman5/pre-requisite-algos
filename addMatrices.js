// Write a program to add and subtract of given (NXN) Matrices
/**
 * matrice addition is quite simple on paper.
 * we just add the elements of the corresponding matrices.
 * lets see how we do that using algorithms
 */

 // these are the two matrices that are going to be added
let matrice = [[1, 2], [3, 4], [5, 6]]
let matrice2 = [[1, 2], [3, 4], [5, 6]]

// This is the resulting matrice after the addition
let result = []

/**
 * this is a function to calculate the dimensions of the matrice.
 * did not prove to be usefull here, but maybe elsewhere.
 * this function only checks the first element of the outer array.
 * so it expects that the arrays within the arrays are or uniform length
 */
const dimensions = (matrice) => {
    console.log([matrice.length, matrice[0].length])
    return [matrice.length, matrice[0].length]
}
// dimensions(matrice)

/**
 * this is an important function, it verifies that the two matrices provided are of the same dimensions
 * addition can only be performed on matrices of same dimensions.
 * if they are different, the addition will still be performed but some elements will be NaN.
 */
const verifyMatrice = () => {
    let firstMatrice = {
        length: matrice.length,
        elementLength: matrice.map(e => e.length)
    }
    // console.log(firstMatrice);

    let secondMatrice = {
        length: matrice2.length,
        elementLength: matrice2.map(e => e.length)
    }
    // console.log(secondMatrice);

    // to compare two arrays, we need to use JSON.Stringify()
    if (firstMatrice.length == secondMatrice.length
        && JSON.stringify(firstMatrice.elementLength) == JSON.stringify(secondMatrice.elementLength)) {

        // console.log('true')
        return true
    } else {
        console.log('addition cannot be performed on matrices of different dimensions')
        return false
    }
}
// verifyMatrice()

/**
 * this is the function which actually adds the matrices.
 * .map can take three parameters, of which two are value and index
 * so e and x are value and index and index2 are the indexes.
 * we are pushing the result of e.map((x, index2) => x + matrice2[index][index2]) into the 
 * result array declared above
 */
const addMatrice = () => {
    if (verifyMatrice()) {
        matrice.map((e, index) => {
            result.push(
                e.map((x, index2) => x + matrice2[index][index2])
            )
        })
        console.log('sum ->', result)
    }
}

addMatrice()