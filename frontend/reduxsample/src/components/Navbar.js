import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const cartNumber = useSelector((state) => state.cart.value)


  console.log(cartNumber)

  return (
    <h1>{cartNumber}</h1>
  )
}

export default Navbar