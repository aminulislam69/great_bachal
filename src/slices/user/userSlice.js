import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'user',
    initialState: {
      loginUser: null,
    },
    reducers: {
      userdata: (state, action) => {
        state.loginUser = action.payload
      },
     
    },
  })
  
 
  export const {  userdata } = counterSlice.actions
  
  export default counterSlice.reducer