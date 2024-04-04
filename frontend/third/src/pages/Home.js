import React from 'react'

const Home = () => {

  const getData = async() => {
    try {
      let response = await fetch("http://localhost:9000/product/products")
      let data = response.json()
      console.log(data)
    } catch (error) {
      console.log('Get Products Error', error)
    }
  }


  return (
    <div>
      <button onClick={getData}>Get Products</button>
    </div>
  )
}

export default Home