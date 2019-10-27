// Write An Algorithm using Javascript to check if a given number is in the following series:
// 4,16,64,256,1024,4096,16384.,......., 4^N

const checkingLog = (num) => {
    let a = Math.log(num) / Math.log(4)
    let b = String(a)

    if (b.indexOf('.') > 0) {
        console.log('not part of sequence')
    } else {
        console.log('part of sequence')
    }
    return a;
}

checkingLog(64)

