import React from 'react'
import Navbar from './components/client/Navbar'
import { Routes, useLocation , Route } from 'react-router-dom'
import Home from './Pages/client/Home'
const App = () => {

const isownerPath = useLocation().pathname.includes("admin")

  return (
    <div>
      {!isownerPath && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
