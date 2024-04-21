import React from 'react'
import { useDispatch } from 'react-redux'
import { arttir, azalt } from '../store/slices/cartSlice'

const Main = () => {

  const dispatch = useDispatch()


  const degistir = () => {
    dispatch(arttir())
  }


  return (
    <div>
      <button onClick={degistir}>Sepete Ekle</button>
      <button onClick={() => dispatch(azalt())}>Sepeti Azalt</button>
    </div>
  )
}

export default Main