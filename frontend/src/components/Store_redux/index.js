import { createSlice, configureStore } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: "auth",
  initialState: {
   user:"",
   isLoggedIn:false
  },
  reducers: {
   //function
   login(state){
    state.isLoggedIn=true
   },

   logout(state){
    state.isLoggedIn=false
   },
  },
})

export const authActions = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer,
})

export default store;



