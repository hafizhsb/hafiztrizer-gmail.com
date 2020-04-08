// Destructuring array
const raceResults = [
  'Budi',
  'John',
  'Badu',
  'Doe',
  'Jane'
]

const [gold, silver, bronze, ...other] = raceResults

// Destructuring object
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
}

// nation alias for country
const { first, last, country:nation } = runner
console.log(nation)

// Nested destructuring
const results = [{
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
},
{
  first: 'Feyisa',
  last: 'Lilesa',
  country: 'Ethiopia'
},
{
  first: 'Galen',
  last: 'Rupp',
  country: 'United States'
}
]

const [{
  first: goldWinner
}, {
  country
}] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"

// Destructuring parameters
const fullName = ({first, last}) => {
  console.log(`${first} ${last}`) 
}

const runner2 = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
}

fullName(runner)