import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog';
import Products from './pages/Product/Products';
import Contact from './pages/Contact/Contact';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Products" element={<Products/>} />
      <Route path='/Blog' element={<Blog/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();