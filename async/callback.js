function grumpus() {
  console.log("GAAHHH GO AWAY!")
}

setTimeout(grumpus, 5000)

setTimeout(function() {
  console.log('Welcome 3 second!')
}, 3000)

// Callback hell
const greet = (delay, callback) => {
  setTimeout(() => {
    console.log('Hello World!')
    if (callback) callback()
  }, delay)
}

greet(1000, () => {
  greet(1000, () => {
    greet(1000, () => {
      greet(1000)
    })
  })
})