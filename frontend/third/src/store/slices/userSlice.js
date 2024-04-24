import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name : "user",
  initialState: {
    user : false
  },
  reducers : {
    setUser : (state) => {
      state.user = !state.user
    }
  }
})

export const {setUser} = userSlice.actions
export default userSlice.reducer