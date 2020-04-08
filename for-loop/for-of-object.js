const movieReviews = {
  Arrival   : 10,
  Alien     : 8.5,
  Ragnarok  : 8.3,
  Sula      : 9.3
}

for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie])
}

const ratings = Object.values(movieReviews)
let total = 0

for (let r of ratings) {
  total += r
}

const avg = total/ratings.length
console.log(avg)