//7. kerdes
const add = (num1, num2) => {
  let solution = num1 + num2
  return solution
}

console.log(add(2, 8))

const subtract = (num1, num2) => {
  let solution = num1 - num2
  return solution
}

console.log(subtract(5, 3))

const multiply = (num1, num2) => {
  let solution = num1 * num2
  return solution
}

console.log(multiply(3, 4))

const divide = (num1, num2) => {
  let solution = num1 / num2
  return solution
}

console.log(divide(12, 3))

module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
}