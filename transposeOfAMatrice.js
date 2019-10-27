// Write a Program to display transpose of a matrix

/**
 * ! this is not a very efficient solution of the problem, but it does work
 */

let matrice = [
    [1, 0, 5],
    [4, 8, 5],
    [6, 4, 5],
    [0, 3, 5]
]

let newMatrice = []

const column = (mat, columnNumber) => {
    let columns = []
    mat.map(e => (columns.push(e[columnNumber])))
    // newMatrice.push(columns)
    // console.log(newMatrice)
    return columns
}
matrice.map((val, index) => {
    newMatrice.push(column(matrice, index))
})

const removeUselessRows = () => {
    newMatrice.map((val, index) => {
        val.map((e) => {
            if (e === undefined) {
                newMatrice.splice(index, 1)
            }
        })
    })
    return newMatrice
}
removeUselessRows()

console.log(newMatrice);