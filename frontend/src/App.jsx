import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Register from './pages/public/Register';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
    </>
  )
}

export default App