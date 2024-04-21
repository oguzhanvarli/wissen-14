import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    products : []
  },
  reducers: {
    addToCart : (state,action) => {
      state.value += 1
      //console.log(action.payload)
      state.products.push(action.payload)
    },
    deleteCart: (state) => {
      state.value = 0
      state.products = []
    }
  }
})

export const {addToCart, deleteCart} = cartSlice.actions
export default cartSlice.reducer