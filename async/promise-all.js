const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          {id: 1, name: 'John'},
          {id: 2, name: 'Budi'}
        ],
        '/about': 'This is the about page'
      }
      

      const data = pages[url]
      if (data) {
        resolve({
          status: 200,
          data: data
        })
      } else {
        reject({
          status: 404
        })
      }
    }, 2000)
  })
}

const getData = async () => {
  try {
    // Success
    const prom1 = fakeRequest('/users')
    const prom2 = fakeRequest('/about')
    const result = await Promise.all([prom1, prom2])

    // Error
    // const prom1 = fakeRequest('/users')
    // const prom2 = fakeRequest('/about')
    // const prom3 = fakeRequest('/abouta')
    // const result = await Promise.all([prom1, prom2, prom3])
    console.log(result)
  } catch(err){
    // Handling promise reject
    console.log(err)
  }
}


getData()