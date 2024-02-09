import React from 'react'
import Login from './Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Cadastro from './Cadastro'
import axios from 'axios'

const baseURL = 'localhost:8000'

function App() {

  

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/Cadastro' element={<Cadastro />}></Route>
    </Routes>
      <Login />
    </BrowserRouter>
    
  )
}

export default App