import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser:null
}

export const userSlice = createSlice({
    name:"userName",
    initialState,
    reducers:{

        setCurrentUser:(state,action)=>{

            state.currentUser = action.payload

        },

    }
})



//selector function
export const selectCurrentUser = (state) =>state.user.currentUser
//NOTE THAT user in this used from store {user:userReducer}

export default userSlice.reducer
export const {setCurrentUser} = userSlice.actions

