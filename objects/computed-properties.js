const role = 'Host'
const person = 'John Doe'
const role2 = 'Director'
const person2 = 'Jane Doe'

const team = {
  [role]: person,
  [role2]: person2,
  [1 + 5 + 2]: 'eight'
}

// const addProp =  (obj, k, v) => {
//   const copy = {...obj}
//   copy[k] = v
//   return copy
// }

const addProp = (obj, k, v) => ({...obj,[k]:v})

console.log(addProp(team, 'happy', ':)'))