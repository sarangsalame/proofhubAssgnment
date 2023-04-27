// 1. Write a program to print a series with a 'while' loop.
// 0, 1, 1, 2, 3, 5, 8, 13, 21,..................



function fibb(n) {
  let arr = [0, 1];
  let curr = 2;

  while (curr <= n) {
    arr[curr] = arr[curr - 1] + arr[curr - 2];
    curr++;
  }

  return arr
}

console.log(fibb(9)); 