class Color {
  constructor(r, g, b, name) {
    this.r = r
    this.g = g
    this.b = b
    this.name = name
  }

  innerRGB() {
    const {r, g, b} = this
    return `${r}, ${g}, ${b}`
  }

  rgb() {
    return `rgb(${this.innerRGB()})`
  }
}

const red = new Color(255, 67, 69, 'tomato')
console.log(red.rgb())