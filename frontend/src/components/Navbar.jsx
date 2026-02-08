import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try{
      axios.post("http://localhost:3000/api/public/logout", {}, {
      withCredentials: true,
    });
    navigate('/')
    } catch (err) {
      console.error(err)
    }
    
  }
  return (
    <>
    <div>Navbar</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}

export default Navbar