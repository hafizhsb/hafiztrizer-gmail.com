function isPangram(sentence) {
  for (let char of 'abcdefghijklmnopqrstuvwxyz') {
    if (sentence.toLowerCase().indexOf(char) === -1) {
      return false
    }
  }
  return true
}

console.log(isPangram('The five boxing wizards jump quickly'))