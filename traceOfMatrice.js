let matrice = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
]

let trace = 0;

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
        console.log('invalid matrice --> not a Square Matrice \nTrace of a matrice only exists for a square matrice');
        return false
    }

}
// verifyMatrice() // test

const countTrace = () => {
    if (verifyMatrice()) {
        matrice.map((val, index) => {
            return trace += val[index]
        })
        console.log('the Trace of the Matrice is ->', trace)
    }
}

countTrace()