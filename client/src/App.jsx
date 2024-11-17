import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import Details from './Details'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update/:id' element={<UpdateUser/>}></Route>
          <Route path='/details/:id' element={<Details/>} loader={({params})=>fetch(`http://localhost:5000/users/${params}`)} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
