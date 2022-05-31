import React from 'react'
import './App.css'
import './script'
import Logo from './image/logo.png'
import off from './image/off.png'
import { products } from './data'
import Navbar from './components/Navbar/Navbar'
import Product from './components/Product/Product'
import Footer from './components/Footer/Footer'
import Login from './pages/login/Login'
import Home from './pages/Home/Home'
import User from './image/user.png'
import Cart from './image/cart.png'

const App = (props) => {
  const user = true;
  return (
    <div className='wrapper'>
      {
        user ? (<div>
          <Navbar Logo={Logo} products={products} User={User} Cart={Cart} />
          <Home/>
          <Footer/>
        </div>) : <Login />
      }

    </div>
  )
}

export default App