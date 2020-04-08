class Pet {
  constructor(name, age) {
    console.log('In Pet constructor')
    this.name = name
    this.age = age
  }

  eat() {
    return `${this.name} is eating!`
  }
}

class Cat extends Pet {
  constructor(name, age, hobby) {
    console.log('In Cat constructor')
    super(name, age)
    this.hobby = hobby
  }

  meow() {
    return 'MEOWWW!'
  }
}

class Dog extends Pet {
  bark() {
    return 'BARKK!'
  }
}

const momo = new Cat('momo', 3, 'eat') 
console.log(momo)