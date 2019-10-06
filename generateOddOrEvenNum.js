// Write a program to Generate Even and Odd Number less than N

function print(num, oddOrEven) {
    for (let x = 0; x <= num; x++) {
      if (oddOrEven == "even") {
        if (x % 2 == 0) {
          console.log(x);
        }
      } else {
        if (x % 2 == 1) {
          console.log(x);
        }
      }
    }
  }