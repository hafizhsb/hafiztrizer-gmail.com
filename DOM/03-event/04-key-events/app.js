const addItemInput = document.getElementById('addItem')

addItemInput.addEventListener('keypress', function(e) {
  if (e.key == 'Enter') {
    const newItem = this.value
    const items = document.getElementById('items')
    const newLi = document.createElement('li')
    newLi.innerText = newItem
    items.appendChild(newLi)
    this.value = ''
  }
})