let matrice = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]

let checkArr = []

// to check the dimensions of the matrice. if they are not the same, the matchMatrice function won't be executed at all
const verifyMatrice = () => {
    let firstMatrice = {
        length: matrice.length,
        elementLength: matrice.map(e => e.length)
    }
    // console.log(firstMatrice);

    if ((firstMatrice.elementLength.map(e => e == firstMatrice.length)).includes(false) == false) {
        // console.log(true);
        return true
    } else {
        console.log('invalid matrice --> not a Square Matrice \nIndentity matrices can only be square matrices');
        return false
    }

}
// verifyMatrice() // test

const verifyIdentity = () => {
    if (verifyMatrice()) {
        // matrice.map((val, index) => {
        //     val[index] == 1 ? console.log(true) : console.log(false)
        // })
        matrice.map((val, index) => {
            val.map(() => {
                if (val[index] == 1) {
                    checkArr.push(true)
                } else {
                    checkArr.push(false)
                }
            })
        })

        matrice.map((val, index) => {
            val.map((e, index1) => {
                switch (index != index1) {
                    case true: 
                        if (e != 0) checkArr.push(false)
                    default:
                        null
                }
            })
        })

        // console.log(checkArr)
        if (checkArr.includes(false)) {
            console.log('Not an Identity matrice')
        } else {
            console.log('Identity Matrice')
        }
    }
}
verifyIdentity()