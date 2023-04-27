// 2. Write a program to get a sum of even and odd numbers between 1 - 100.


let evenNumberSum = 0;
let oddNumberSum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumberSum += i;
  } else {
    oddNumberSum += i;
  }
}

console.log("Even sum", evenNumberSum);
console.log("Odd sum ", oddNumberSum);