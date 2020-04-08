function sayHi() {
  console.log('Hi!')
  console.log(this)
}

const person = {
  first: 'Budi',
  last: 'Sudarsono',
  nickName: 'Budi',
  fullName() {
    const {first, last, nickName} = this
    return `${first} ${last} AKA ${nickName}`
  },
  bio() {
    const fullName = this.fullName()
    console.log(`${fullName} is person`)
  },
  laugh: () => {
    console.log(this)
    console.log(`${this.nickName} say HAHAHA`)
  }
}

person.fullName()
person.bio()
person.laugh()