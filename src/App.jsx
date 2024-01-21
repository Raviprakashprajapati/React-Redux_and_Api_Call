import './App.css'
import Todo from './component/Todo'
import InputFields from './component/InputFields'
import { selectCurrentUser } from './reduxfeaures/userSlice'
import { useSelector } from 'react-redux'
import { selectCurrentAdmin } from './reduxfeaures/adminSlice'
import { useState } from 'react'

function App() {

  const user = useSelector(selectCurrentUser) || {}
  const admin = useSelector(selectCurrentAdmin) || {}
  console.log(admin)
  const [env1,setEnv1] = useState(import.meta.env.VITE_REACT_APP_API || "nothing")
  const [env2,setEnv2] = useState(import.meta.env.VITE_REACT_APP_API_KEY || "nothing")
  console.log("ENV1 ",import.meta.env.VITE_REACT_APP_API_KEY)
  console.log("ENV 2",import.meta.env.VITE_REACT_APP_API)

  return (
    <>

    <h3>TODO</h3>
    {
<>
<h3>{env1}</h3>
      <h3>{env2}</h3>
</>

    }
    <InputFields/>
    <Todo/>

 <div className='border p-3' >
        <h3>{user?.name}</h3>
        <h3>{user?.contact}</h3>
    </div> 


      
    </>
  )
}
export default App
