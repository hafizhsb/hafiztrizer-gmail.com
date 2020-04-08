const movieReviews = {
  Arrival   : 10,
  Alien     : 8.5,
  Ragnarok  : 8.3,
  Sula      : 9.3
}

for (let movie in movieReviews) {
  console.log(movie)
  console.log(movieReviews[movie])
}