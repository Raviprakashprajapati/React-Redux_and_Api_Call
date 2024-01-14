import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../reduxfeaures/todoSlice.js"
import userReducer from "../reduxfeaures/userSlice.js"
import adminReducer from "../reduxfeaures/adminSlice.js"
import productReducer from "../reduxfeaures/productSlice.js"

export const store = configureStore({
    reducer:{
        todo:todoReducer,
        user:userReducer,
        admin:adminReducer,
        product:productReducer,
    }
})