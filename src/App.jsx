import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { LoginUserContext } from './Contextapi.jsx/Userlogin'
import { useContext } from 'react'
import { Dashboard } from './Components/Dashboard'

function App() {

  const { Details, LogInFun, LogOutFun } = useContext(LoginUserContext);
  return (
    <>
     {Details.isAuth?<Dashboard/>:<Login/>}
    </>
  )
}

export default App
