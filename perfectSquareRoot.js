// Write An Algorithm using Javascript finding Perfect Square Root of a Number without using Built in Function


const findRoot = (num) => {
    console.log(Math.sqrt(num));
    let root = 0;
    for (let i = 0; i < num; i++) {
        if (i*i == num) {
            root = i;
            break;
        } else {
            continue;
        }
    }
    console.log(root)
    
}

findRoot(4000000000000000000)