import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../componets/ProductCard'

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


  useEffect(() => {
    getData()
  }, [])

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
    <div className='grid grid-cols-4 gap-6'>
      {/* <h1>{data[0].title}</h1> */}
      {
        data.map((element) => (
          <ProductCard element={element} />
        ))
      }
    </div>
  )
}

export default Home