import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../reduxfeaures/todoSlice';
import { setCurrentUser } from '../reduxfeaures/userSlice';
import { setCurrentAdmin } from '../reduxfeaures/adminSlice';

function InputFields() {

    const [userNameInput,setUserNameInput] = useState("")
    const [userContactInput,setUserContactInput] = useState("")
    const [adminNameInput,setAdminNameInput] = useState("")
    const [adminContactInput,setAdminContactInput] = useState("")
    const [inputData,setInputData] = useState("");
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(inputData))
        setInputData("")
    }

    function handleUserSubmit(e){
            e.preventDefault()
            dispatch(setCurrentUser({name:userNameInput,contact:userContactInput}))
            setUserNameInput("")
            setUserContactInput("")
    }

    function handleAdminSubmit(e){
        e.preventDefault()
        dispatch(setCurrentAdmin({name:adminNameInput,contact:adminContactInput}))
        setAdminNameInput("")
        setAdminContactInput("")
        
    }

  return (
    <div>

        {/* TODOS FROM */}
        <form  >
            <input type="text" className='p-3  '  placeholder='Enter your todo' value={inputData} onChange={(e)=>setInputData(e.target.value)}   />
            <button onClick={handleSubmit} className='' >submit</button>
        </form>

        <form className='mt-5'>
            <h3>USER </h3>
            <input type="text" placeholder='Enter name ' value={userNameInput}
             onChange={(e)=>setUserNameInput(e.target.value)}  />
            <input type="text" placeholder='Enter contact ' value={userContactInput} onChange={(e)=>setUserContactInput(e.target.value)}  />
            <button onClick={handleUserSubmit} >submit</button>
        </form>


        <form className='mt-5'>
            <h3>ADMIN </h3>
            <input type="text" placeholder='Enter name ' value={adminNameInput}
             onChange={(e)=>setAdminNameInput(e.target.value)}  />
            <input type="text" placeholder='Enter contact ' value={adminContactInput} onChange={(e)=>setAdminContactInput(e.target.value)}  />
            <button onClick={handleAdminSubmit} >submit</button>
        </form>


      
    </div>
  )
}

export default InputFields
