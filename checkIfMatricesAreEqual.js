let matrice = [[2, 3], [3, 4]]
let matrice2 = [[2, 3], [3, 4]]

let result = []

// to check the dimensions of the matrice. if they are not the same, the matchMatrice function won't be executed at all
const dimensions = () => {

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
        // console.log(true);
        return true
    } else {
        console.log('Not Equal --> dimensions are not same');
        return false
    }
}
// dimensions()

// if the dimensions matrice returns true, then the individual elements within the matrice will be checked.
const matchMatrice = () => {
    if (dimensions()) {
        matrice.map((val, index) => {
            val.map((e, index1) => {
                if (e == matrice2[index][index1]) {
                    result.push(true)
                } else {
                    result.push(false)
                }
            })
        })
        // console.log(result)
        result.includes(false) ? console.log('Not Equal --> values are not equal') : console.log('The Matrices are Equal')
    }
}
// console.log(matchMatrice())
matchMatrice()