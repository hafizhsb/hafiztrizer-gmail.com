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

const getData = async (endpoint) => {
  try {
    const response = await fakeRequest(endpoint)
    console.log(response)
  } catch(err){
    // Handling promise reject
    console.log(err)
  }
}


getData('/users')
getData('/contact')