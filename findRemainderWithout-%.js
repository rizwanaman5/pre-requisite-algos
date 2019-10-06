// Write a program to find remainder of two numbers without using modulus (%) operator 
// Dividing a by b...........
function mod(a, b) {
    if (b > a) {
      console.log(a);
    } else {
      console.log(a - (b * Math.floor(a / b)));
    }
  }