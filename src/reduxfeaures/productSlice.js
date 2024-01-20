import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProduct = createAsyncThunk('fetchProduct',async()=>{
 
    const response = {}
    return response.json()
    
})


const initialState = {
    products:null,
    isLoading:false,
    isError:false,
}

const productSlice = createSlice({
    name:"productName",
    initialState,
    reducers:{},

    extraReducers:(builder)=>{

        // builder.addCase(fetchProduct,(state,action)=>{
        //     console.log("ERROR : ",action.payload)
        //     state.isError = true
        // })

        // builder.addCase(fetchProduct.pending,(state,action)=>{
        //     state.isLoading = true;
        // })

        // builder.addCase(fetchProduct.fulfilled,(state,action)=>{
        //     state.isLoading= false;
        //     state.products = action.payload
        // })
    }
})


export default productSlice.reducer