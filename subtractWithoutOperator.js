//  Write a program to subtract two integers without using Minus (-) operator
// subtracting a from b.........
function sub(a, b) {
    if (a < b) {
      for (let i = a; i <= b; i++) {
        switch (a + i) {
          case b:
            console.log(i);
        }
      }
    } else {
      for (let i = b; i <= a; i++) {
        switch (b + i) {
          case a:
            console.log(i * (-1));
        }
      }
    }
  }