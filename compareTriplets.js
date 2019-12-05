function compareTriplets(a, b) {
    let arr = [0, 0]
    a.map((val, index) => {
        if (val > b[index]) {
            arr[0] += 1
        } else if (val < b[index]) {
            arr[1] += 1
        } else {
            null
        }
        console.log(val, b[index])
    })
    return arr
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]))