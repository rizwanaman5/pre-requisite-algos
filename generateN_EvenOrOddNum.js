// Generate ‘N’ Even and Odd Numbers.
function printNum(num, oddOrEven) {
    let s = oddOrEven == "odd" ? 1 : 0;
    for (let i = s; i <= num * 2; i += 2) {
      console.log(i);
    }
  }