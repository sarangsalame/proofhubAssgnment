// 3. Write a command to find if a given number is even / odd without a conditional statement ?


function isEven(n) {
  return (n & 1) === 0;
}

let res = isEven(5)
console.log(res);
