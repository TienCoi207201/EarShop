import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog';
import Products from './pages/Product/Products';
import Contact from './pages/Contact/Contact';
import Detail from './pages/Product-detail/Product-detail'
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
// import Login from './pages/login/Login';
import { useSelector } from 'react-redux';

// import reportWebVitals from './reportWebVitals';

export default function Routers() {
  const user = useSelector(state => state.productSlice.users)
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Detail/:DetailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();