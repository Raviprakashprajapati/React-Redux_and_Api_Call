import './App.css'
import Todo from './component/Todo'
import InputFields from './component/InputFields'
import { selectCurrentUser } from './reduxfeaures/userSlice'
import { useSelector } from 'react-redux'
import { selectCurrentAdmin } from './reduxfeaures/adminSlice'

function App() {

  // const user = useSelector(selectCurrentUser)
  // const admin = useSelector(selectCurrentAdmin)
  // console.log(admin)
  return (
    <>

    <h3>TODO</h3>
      <h3>Updated COmmit</h3>
    {/* <InputFields/>
    <Todo/>

 <div className='border p-3' >
        <h3>{user?.name}</h3>
        <h3>{user?.contact}</h3>
    </div>  */}


      
    </>
  )
}
export default App
