const readLine = require('readline-sync')

let num1 = readLine.question()
let num2 = readLine.question()

const generate2d = (n, m) => {
  const arr = [];
  let element = 1;
  for (let i = 0; i < n; i++) {
    arr.push([]);
    for (let j = 0; j < m; j++) {
      arr[i].push(element)
      element = element * 2
    }
  }
  return arr
}

console.log(generate2d(num1, num2))