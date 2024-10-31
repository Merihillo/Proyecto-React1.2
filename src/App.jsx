/* import { useState } from 'react' */
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './Pages/Home/Home'
import Header from './components/layout/header/header'
import Users from './Pages/users/users'
import Login from './Pages/login/login';
import Register from './Pages/register/register'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
{/*Aqui las rutas del header */}

          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App