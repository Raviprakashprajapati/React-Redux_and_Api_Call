
//NOTE THAT TODO is using as a stand-alone thats why oonly disptahc method i can used which does not need to modify but useSelector should be modify you can view this in userSlice,userAdmin file
import { createSlice,nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name:"todoName",
    initialState:{ todos:[{d:1,text:"hello ravi"}] },
    // initialState:{ todos:[] },
    reducers:{
        addTodo:(state,action)=>{

            const todo = {id:nanoid(),text:action.payload}
            state.todos.push(todo) 

        },

        removeTodo:(state,action)=>{

            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)

        },




    }

})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer
