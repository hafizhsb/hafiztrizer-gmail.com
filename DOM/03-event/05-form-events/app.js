const form = document.getElementById('signup-form')
const creditCardInput = document.getElementById('cc')
const termCheckBox = document.getElementById('term')
const veggieSelect = document.getElementById('veggie')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  console.log(creditCardInput.value)
  console.log(termCheckBox.checked)
  console.log(veggieSelect.value)
})

const formData = {}
for (let input of [creditCardInput, termCheckBox, veggieSelect]) {
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target
    formData[name] = type == 'checkbox' ? checked : value
  })
}