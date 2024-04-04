import axios from 'axios'
import React, { useState } from 'react'

const Home = () => {

  // let data = [{
  //   title: "",
  //   price: 0,
  //   image: "",
  //   quantity : 0
  // }]

  const [data, setData] = useState([
    {
      title: "",
      price: 0,
      image: "",
      quantity: 0
    }
  ])

  const getData = async () => {
    //FETCH İLE GET İŞLEMİ

    // try {
    //   let response = await fetch("http://localhost:9000/product/products")
    //   let data = response.json()
    //   console.log(data)
    // } catch (error) {
    //   console.log('Get Products Error', error)
    // }

    //AXIOS İLE GET İŞLEMİ
    try {
      let response = await axios.get("http://localhost:9000/product/products")
      setData(response.data)
      console.log(data[0].title)
    } catch (error) {
      console.log('Get Products Error', error)
    }
  }

  console.log(data)


  return (
    <div>
      <button onClick={getData}>Get Products</button>
      {/* <h1>{data[0].title}</h1> */}
      {
        data.map((element) => (
          <>
            <h3>{element.title}</h3>
            <h6>{element.price}</h6>
          </>
        ))
      }
    </div>
  )
}

export default Home