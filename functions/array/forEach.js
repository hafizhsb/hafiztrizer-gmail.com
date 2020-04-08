const numbers = [10, 20, 30, 40, 50, 60]

numbers.forEach(function(number, idx, arr) {
  console.log(number)
  console.log(idx)
  console.log(arr)
})

function multiply(number) {
  console.log(number*2)
}

numbers.forEach(multiply)