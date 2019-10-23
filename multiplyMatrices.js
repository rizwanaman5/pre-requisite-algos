// Write a program to multiply given 2 matrices | provided the matrices follow proper rules

/**
 * matrice multiplication has a lot of rules. one can only multiply matrices of certain dimensions
 * for a meaningful product, the number of columns in the first matrice is equal to the number of rows in the second
 * so, once cannot multiply a 2x3 matrice with a 2x3 matrice
 * but you can multiply a 2x3 matrice with a 3x2 matricel, and the result will be a 2x2 matrice.
 */

let matrice = [
    [1, 2],
    [3, 4], 
    [5, 6]
]
let matrice2 = [
    [1, 6, 2], 
    [4, 5, 6]
]

// This is the resulting matrice after the addition
let result = []

const dimensions = (matrice) => {
    let dimensions = {
        rows: matrice.length,
        columns: matrice[0].length
    }
    console.log(dimensions)
    return dimensions
}
// dimensions(matrice) // test

/**
 * ? the rows of matrice1 is multiplied with the colums of matrice2  --->> IMPORTANT
 * * so it would be most useful to extract the rows and columns of the two matrices
 *
 * this function takes two arguements, matrice & column number, and it returns an Array.
 * column(matrice2, 1) --> [2, 5]
 */
const column = (mat, columnNumber) => {
    let columns = []
    mat.map(e => columns.push(e[columnNumber]))
    // console.log(columns)
    return columns
}
// column(matrice2, 1) // test

/**
 * * this is similar to the sumProduct function in excel.
 * for matrice multiplication, we need to multiply a row and its corresponding column and add the products
 * that is what the sumProduct function does. 
 * * it takes two arrays as arguments and returns 1 number, which is the sum of the products of the individual elements
 * * in the two arrays.
 */
const sumProduct = (arr1, arr2) => {
    let sum = 0
    arr1.map((e, index) => {
        sum += e * arr2[index]
    })
    // console.log('sumProduct =', sum)
    return sum
}
// sumProduct([1, 3], [2, 4]) // test

/**
 * for multiplication the two matrices have to be of certain dimensions.
 * the number of rows in matrice1 has to equal the number of columns in matrice2
 * 
 * this function verifies that. the product function will only be executed if verifyMagtrice returns true
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

    if (((secondMatrice.elementLength.map(e => e == firstMatrice.length)).includes(false) == false)
        && ((firstMatrice.elementLength.map(e => e == secondMatrice.length)).includes(false) == false)) {
        // console.log(true);
        return true
    } else {
        console.log('invalid matrice dimensions provided');
        return false
    }
    // console.log((secondMatrice.elementLength.map(e => e == firstMatrice.length)).includes(false)==false)
    // console.log((firstMatrice.elementLength.map(e => e == secondMatrice.length)).includes(false)==false)

}

// verifyMatrice() // test

/**
 * one row in the first matrice takes up one row in the result matrice after multiplication
 * 
 * finally, this is the function that actually multiplies two matrices -> matrice & matrice2 declared above.
 * 
 */
const product = () => {

    if (verifyMatrice()) {
        // mapping matrix A 
        matrice.map((value) => {
            result.push(
                matrice.map((e, index1) => {
                    return sumProduct(value, column(matrice2, index1))
                })
            )
        })
        console.log('matrice product ->', result)
    }
}
product()