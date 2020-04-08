function makeBetweenFunc(x, y) {
  return function(num) {
    return num >= x && num <= y
  }
}

const isChild = makeBetweenFunc(1, 20)

console.log(isChild(25))
console.log(isChild(11))