let matrice = [
    [-1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]
]

let odd = 0;
let even = 0;
let positive = 0;
let negative = 0;

const verifyMatrice = () => {
    return matrice.map((val) => val.length == matrice[0].length)
}

const checkOddEven = (num) => {
    return num % 2 == 0 ? even += 1 : odd += 1
}
const checkNegativePositive = (num) => {
    return num < 0 ? negative += 1 : positive += 1
}

const showCount = () => {
    console.log(
        {
            odd: odd,
            even: even,
            positive: positive,
            negative: negative
        }
    )
}

const countMatrice = () => {
    if (!verifyMatrice().includes(false)) {
        matrice.map((val) => {
            val.map((e) => (
                checkNegativePositive(e) && checkOddEven(e)
            ))
        })
        showCount()
    } else {
        console.log('Invalid Matrice provided | please check the rows and columns')
    }
}
countMatrice()
