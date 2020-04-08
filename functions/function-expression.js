// Regular function
function add(x, y) {
  return x + y
}

// Function expression with anonymous function
const sum = function(x, y) {
  return x + y
}

// Function expression with named function
const product = function multiply(x, y) {
  return x * y
}

console.log(add(5, 6))
console.log(sum(5, 6))
console.log(product(5, 6))