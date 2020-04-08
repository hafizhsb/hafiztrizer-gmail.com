// ****************
// querySelector
// ****************
//To find the first li on the page:
document.querySelector('li');

//To find the first element with class of special:
document.querySelector('.special');

//To find the first element with id of main (there should only be one...)
document.querySelector('#main');

// To find the first li with the class of special, nested inside of a ul, nested inside a section:
document.querySelector('section ul li.special');


// ****************
// querySelectorAll
// ****************

// To find ALL li's on the page:
document.querySelectorAll('li');

// To find ALL elements with the class of special on the page:
document.querySelectorAll('.special');

// Set and get attributes
  // h1 = document.querySelector('h1')
  // h1.getAttribute('class')
  // h1.setAttribute('class', 'success')

// Changing multiple elements
  // const allLis = document.querySelectorAll('li')
  // const colors = ['orange', 'red', 'black', 'green', 'blue', 'pink']

  // allLis.forEach((el, index) => {
  //   el.style.color = colors[index]
  // })

// Get computed style
const h1 = document.querySelector('h1')
const compStyle = getComputedStyle(h1)
// console.dir(compStyle)

// Manipulating class
const todo = document.querySelector('#todos .todo')
todo.classList.toggle('done')

// Creating elements
const newh2 = document.createElement('h2')
newh2.innerText = 'I like animals'
newh2.classList.add('special')

const newImage = document.createElement('img')
newImage.src = 'https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80'
newImage.width = 300
newImage.height = 300

// appendChild
const section = document.querySelector('section')
section.appendChild(newh2)
section.appendChild(newImage)

const parentUl = document.querySelector('ul')
const newLi = document.createElement('li')
newLi.innerText = 'I AM A NEW LI'
parentUl.appendChild(newLi)

// insertBefore
const firstLi = document.querySelector('li.todo')
const newLi2 = document.createElement('li')
newLi2.innerText = 'I AM A NEW LI'
parentUl.insertBefore(newLi2, firstLi)

// insertAdjacentElement
const newI = document.createElement('i')
newI.innerText = 'I AM ITALICS'
const firstP = document.querySelector('p')
firstP.insertAdjacentElement('beforeBegin', newI)

// append - prepend
  // firstP.append(newI, newLi)
  // firstP.prepend(newI, newLi)

// remove & removeChild
// const h1 = document.querySelector('h1')
h1.remove()