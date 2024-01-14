import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    currentAdmin:null
}

export const adminSlice = createSlice({
    name:"adminName",
    initialState,
    reducers:{

        setCurrentAdmin:(state,action)=>{
            state.currentAdmin = action.payload
        }
    }
})


//selectors
export const selectCurrentAdmin = (state)=>state.admin.currentAdmin
//Note admin in it used from store {admin:adminReducer}

export default adminSlice.reducer;
export const {setCurrentAdmin} = adminSlice.actions