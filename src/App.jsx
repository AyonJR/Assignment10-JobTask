
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App
