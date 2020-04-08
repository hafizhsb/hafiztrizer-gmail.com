
function callThreeTimes(f) {
  f()
  f()
  f()
}

function cry() {
  console.log("BOO HOO I'M SO SAD")
}

callThreeTimes(cry)