import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    arttir : (state) => {
      state.value += 1
    },
    azalt: (state) => {
      state.value -= 1
    }
  }
})

export const {arttir, azalt} = cartSlice.actions
export default cartSlice.reducer