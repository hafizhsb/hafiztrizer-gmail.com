// addEventListener
const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () => {
  alert('CLICKED!!')
})

btn1.addEventListener('click', () => {
  console.log('SECOND THING!!!')
})

btn1.addEventListener('mouseover', () => {
  btn1.innerText = 'DONT TOUCH ME!'
})

btn1.addEventListener('mouseout', () => {
  btn1.innerText = 'Click me!'
})

// Imposible button
const btn2 = document.getElementById('btn2')

btn2.addEventListener('mouseover', () => {
  const width = Math.floor(Math.random() * window.innerWidth) 
  const height = Math.floor(Math.random() * window.innerHeight)
  
  btn2.style.left = `${width}px`
  btn2.style.height = `${height}px`
})

btn2.addEventListener('click', () => {
  btn2.innerText = 'You got me!'
  document.body.style.background = 'green'
})