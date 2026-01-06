import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import UserSlice from "./userSlice";


const store  = configureStore({
    reducer:{
       login: LoginSlice,
       user:UserSlice,
    },
});

export default store ;








/*
create store
  - configureStore() -rtk

Provide my store to app
  -<provider store = {store} - import from react-redux
  
Slice 
 - RTK - createSlice({
    name: "",
    intitialState:
    reducers:{
        addItem:(state ,action )=>{state = action.payload}
      }
   })
    export const {addItem , removeItem} = cartSlice.actions ;
    export default cartSlice.reducer ;

Put that Slice into store   
    - {
        reducer{
            cart - cartSlice,
            user - userSlice 
        }
    }    



*/