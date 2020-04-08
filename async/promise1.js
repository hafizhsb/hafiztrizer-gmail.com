const getMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve()
    } else {
      reject()
    }
  }, 3000)
})

getMessage
  .then(() => {
    console.log('You got message')
  })
  .catch(() => {
    console.log('No message')
  })