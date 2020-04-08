const numbers = [10, 15, 20, 30, 40, 50, 60, 70]
const words = ['si', 'sidul', 'anak', 'betawi', 'asli']

const doubles = numbers.map(function(number) {
  return number * 2
})

const numDetail = numbers.map(function(number) {
  return {
    value: number,
    isEven: number % 2 == 0
  }
})

console.log(numbers)
console.log(doubles)
console.log(numDetail)

const books = [{
  title: 'Good Omens',
  authors: ['Terry Pratchett', 'Neil Gaiman'],
  rating: 4.25
},
{
  title: 'Bone: The Complete Edition',
  authors: ['Jeff Smith'],
  rating: 4.42
},
{
  title: 'American Gods',
  authors: ['Neil Gaiman'],
  rating: 4.11
},
{
  title: 'A Gentleman in Moscow',
  authors: ['Amor Towles'],
  rating: 4.36
}
]

const title = books.map(function(book) {
  return book.title
})

console.log(books)
console.log(title)