const nums = [3, 4, 5, 6, 7]

const multiply = nums.reduce((total, currentValue) => {
  return total * currentValue
})

console.log(multiply)

// Finding max val
const grade = [89, 94, 56, 78, 45, 67, 88, 95]

const maxGrade = grade.reduce((max, currentValue) => {
  if (max < currentValue) return currentValue
  return max
})

console.log(maxGrade)

// Initial value
const sum = [10, 20, 30, 40, 50].reduce((total, currentValue) => {
  return total + currentValue
}, 1000)

console.log(sum)

// tallying
const votes = ['y', 'y', 'n', 'n', 'n', 'y', 'n', 'y', 'y', 'y']

// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val] += 1
//   } else {
//     tally[val] = 1
//   }
//   return tally
// }, {})

const results = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1
  return tally
}, {})

console.log(results)