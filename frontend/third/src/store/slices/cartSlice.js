import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0
  },
  reducers: {
    addToCart : (state) => {
      state.value += 1
    }
  }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer