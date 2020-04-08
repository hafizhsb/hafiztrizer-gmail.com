// arguments object not available inside of arrow function
function fullName(first, last) {
  console.log(arguments)
  console.log(first)
  console.log(last)
}

fullName('Abdul', 'Hafiz', 'Test', 'Test2')