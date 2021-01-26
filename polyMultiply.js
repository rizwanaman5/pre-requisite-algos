const multiply = (a, b) => {
  const res = new Array(a.length + b.length - 1).fill(0);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      res[i + j] = res[i + j] + a[i] * b[j];
    }
  }
  return res;
};

const multiplyMany = (a) => {
  const prod = a.reduce((first, sec) => multiply(first, sec));
  return prod;
};

// console.log(multiply([1, 1, 1], [1, 1, 1]));
console.log(multiplyMany([[-5, 1], [7, 1], [-1, 3, -2]]));
