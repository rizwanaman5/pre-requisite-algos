// Write a program to add and subtract of given (NXN) Matrices

/**
 * ! matrice2 will be ststracted from matrice
 */

let matrice = [[1, 5], [3, 4], [5, 60]]
let matrice2 = [[5, 2], [-3, 4], [15, 6]]
let result = []

const dimensions = (matrice) => {
    console.log([matrice.length, matrice[0].length])
    return [matrice.length, matrice[0].length]
}
// dimensions(matrice)

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

    if (firstMatrice.length == secondMatrice.length
        && JSON.stringify(firstMatrice.elementLength) == JSON.stringify(secondMatrice.elementLength)) {

        // console.log('true')
        return true
    } else {
        console.log('substraction cannot be performed on matrices of different dimensions')
        return false
    }
}
// verifyMatrice()

const addMatrice = () => {

    if (verifyMatrice()) {

        matrice.map((e, index) => {
            result.push(
                e.map((x, index2) => x - matrice2[index][index2])
            )
        })

        console.log('sum ->', result)
    }
}

addMatrice()