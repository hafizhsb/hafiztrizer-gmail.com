console.clear()

// People droping off a form (Action Creators)
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount
    }
  }
}

const deletePolicy = (name) => {
  return {
    type: 'DELETE_POLICY',
    payload: {
      name: name
    }
  }
}

const createClaim = (name, amount) => {
  return {
    type: 'CREATE_CLAIM',
    payload: {
      name: name,
      amount: amount
    }
  }
}

// Reducers (Departments!)
const claimHistory = (oldListOfClaims = [], action) => {
  // We care about this action (FORM)
  if (action.type === 'CREATE_CLAIM') {
    return [...oldListOfClaims, action.payload]
  }

  // We don't care about the action (FORM)
  return oldListOfClaims
}

const accounting = (bagOfMoney = 100, action) => {
  switch(action.type) {
    case 'CREATE_CLAIM':
      return bagOfMoney - action.payload.amount
    case 'CREATE_POLICY':
      return bagOfMoney + action.payload.amount
    default:
      return bagOfMoney
  }
}

const policies = (listOfPolicies = [], action) => {
  switch(action.type) {
    case 'CREATE_POLICY':
      return [...listOfPolicies, action.payload.name]
    case 'DELETE_POLICY':
      return listOfPolicies.filter(name => name !== action.payload.name)
    default:
      return listOfPolicies
  }
}

const {createStore, combineReducers} = Redux

const ourDepartments = combineReducers({
  accounting: accounting,
  claimHistory: claimHistory,
  policies: policies
})

const store = createStore(ourDepartments)

store.dispatch(createPolicy('John', 20))
store.dispatch(createPolicy('Doe', 20))
store.dispatch(createPolicy('Budi', 20))

store.dispatch(createClaim('John', 50))
store.dispatch(createClaim('Budi', 60))

store.dispatch(deletePolicy('Doe'))

console.log(store.getState())