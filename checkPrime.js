// Write a program to decide given N is Prime or not.
function check(num) {
    if (num == 1) {
      console.log('Not a Prime Number');
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          console.log("Not a Prime Number");
          return;
        }
      }
      console.log("is Prime");
    }
  }
  check(1);