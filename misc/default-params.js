const greet = (person, greeting = 'Hi') => {
  console.log(`${greeting} ${person}`)
}

greet('John')
greet('John', 'Hello')