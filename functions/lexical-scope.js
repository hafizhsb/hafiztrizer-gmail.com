function outer() {
  let movie = 'The Movie'

  function inner() {
    // let movie = 'The movie inner'

    function extraInner() {
      console.log(movie)
    }
    extraInner()
  }
  inner()
}

outer()