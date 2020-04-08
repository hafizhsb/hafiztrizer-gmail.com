// Spread for function call
function giveMeFour(a, b, c, d) {
  console.log('a', a)
  console.log('b', b)
  console.log('c', c)
  console.log('d', d)
}

const colors = ['green', 'red', 'yellow', 'black']

giveMeFour(1, 2, 3, 4)
giveMeFour(...colors)

// Spread in array literals
