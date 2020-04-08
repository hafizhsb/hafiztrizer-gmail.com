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
    }, 3000)
  })
}

fakeRequest('/users')
  .then((response) => {
    console.log('status', response.status)
    console.log('data', response.data)
  })
  .catch((response) => {
    console.log('status', response.status)
  })