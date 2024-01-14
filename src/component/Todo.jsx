import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../reduxfeaures/todoSlice";

function Todo(){

    const todos = useSelector((state)=>state.todos)
    const dispatch =  useDispatch()
    console.log(todos)
    function removeHandler(id){
        dispatch(removeTodo(id))
    }

    return(
        <>
        <br />
        {
            todos.map((todo)=>(
                <p className="p-3 bg-slate-300 text-black font-serif mb-3"  >{todo.text} <span className="float-right hover:cursor-pointer" onClick={()=>removeHandler(todo.id)} >❌</span>
                <span className="float-right hover:cursor-pointer ">📝</span>
                </p>
            ))
        }

        
        </>
    )
}

export default Todo;