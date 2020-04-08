function isValidPassword(username, password) {
  // Password min length 8 characters
  if (password.length < 8) {
    return false
  }

  // Can't contain space
  if (password.indexOf(' ') !== -1) {
    return false
  }

  // Can't contain username
  if (password.indexOf(username) !== -1) {
    return false
  }

  return true
}

console.log(isValidPassword('asad', 'asdf 123s'))