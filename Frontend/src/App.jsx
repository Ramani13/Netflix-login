import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Success from './Success'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
       <Route path='/success' element={<Success/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
