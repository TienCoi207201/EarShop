import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar'
import VNDFormat from '../../untils/CurrencyFormat'
import { FaBell, FaCartPlus, FaUser } from 'react-icons/fa'
import axios from 'axios'

const Products = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res => {
        setData(res.data)
        console.log(res.data);
        })
        .catch(error => console.log(error));
    },[]);
    return (
        <div>
            <Navbar/>
            <div className="bg-main">
                <div className="container">
                    <div className="box">
                        <div className="breadcumb">
                            <a href="./index.html">home</a>
                            <span><i className='bx bxs-chevrons-right'></i></span>
                            <a href="./products.html">all products</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="row">
                            <div className="col-3 filter-col">
                                <div className="box filter-toggle-box">
                                    <button className="btn-flat btn-hover">close</button>
                                </div>
                                <div className="box">
                                    <span className="filter-header">
                                        Categories
                                    </span>
                                    <ul className="filter-list">
                                        <li><a href="#">Wireless</a></li>
                                        <li><a href="#">In-ear headphone</a></li>
                                        <li><a href="#">Over-ear headphone</a></li>
                                        <li><a href="#">sport headphone</a></li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <span className="filter-header">
                                        Price
                                    </span>
                                    <div className="price-range">
                                        <input type="text" />
                                        <span>-</span>
                                        <input type="text" />
                                    </div>
                                </div>
                                <div className="box">
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="status1" checked />
                                                <label for="status1">
                                                    On sale
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="status2" />
                                                <label for="status2">
                                                    In stock
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="status3" />
                                                <label for="status3">
                                                    Featured
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <span className="filter-header">
                                        Brands
                                    </span>
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" checked/>
                                                <label for="remember1">
                                                    JBL
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember2" />
                                                <label for="remember2">
                                                    Beat
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember3" />
                                                <label for="remember3">
                                                    Logitech
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember4" />
                                                <label for="remember4">
                                                    Samsung
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember5" />
                                                <label for="remember5">
                                                    Sony
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <span className="filter-header">
                                        Colors
                                    </span>
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    Red
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember2" />
                                                <label for="remember2">
                                                    Blue
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember3" />
                                                <label for="remember3">
                                                    White
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember4" />
                                                <label for="remember4">
                                                    Pink
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember5" />
                                                <label for="remember5">
                                                    Yellow
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="box">
                                    <span className="filter-header">
                                        rating
                                    </span>
                                    <ul className="filter-list">
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    <span className="rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                    </span>
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    <span className="rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bx-star'></i>
                                                    </span>
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    <span className="rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                    </span>
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    <span className="rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                    </span>
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="group-checkbox">
                                                <input type="checkbox" className="remember1" />
                                                <label for="remember1">
                                                    <span className="rating">
                                                        <i className='bx bxs-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                        <i className='bx bx-star'></i>
                                                    </span>
                                                    <i className='bx bx-check'></i>
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-9 col-md-12">
                                <div className="box filter-toggle-box">
                                    <button className="btn-flat btn-hover">filter</button>
                                </div>
                                <div className="box">
                                    <div className="row">
                                        {data?.map((e, i) => (
                                        <div class="col-4 col-md-6 col-sm-12">                                                  
                                            <div class="product-card">
                                                    <div class="product-card-img">
                                                        <img src={e.link1} alt={e.title} />
                                                        <img src={e.link2} alt={e.title} />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <Link to={`/Detail/${e.id}`} class="btn-flat btn-hover btn-shop-now">shop now</Link>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        {e.name}
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>{VNDFormat(e.oldPrice)}</del></span>
                                                        <span class="curr-price">{VNDFormat(e.newPrice)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        ))}     
                                    </div>
                                </div>
                                <div className="box">
                                    <ul className="pagination">
                                        <li><a href="#"><i className='bx bxs-chevron-left'></i></a></li>
                                        <li><a href="#" className="active">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#"><i className='bx bxs-chevron-right'></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="bg-second">
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-md-6">
                            <h3 className="footer-head">Products</h3>
                            <ul className="menu">
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">product help</a></li>
                                <li><a href="#">warranty</a></li>
                                <li><a href="#">order status</a></li>
                            </ul>
                        </div>
                        <div className="col-3 col-md-6">
                            <h3 className="footer-head">services</h3>
                            <ul className="menu">
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">product help</a></li>
                                <li><a href="#">warranty</a></li>
                                <li><a href="#">order status</a></li>
                            </ul>
                        </div>
                        <div className="col-3 col-md-6">
                            <h3 className="footer-head">support</h3>
                            <ul className="menu">
                                <li><a href="#">Help center</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">product help</a></li>
                                <li><a href="#">warranty</a></li>
                                <li><a href="#">order status</a></li>
                            </ul>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="contact">
                                <h3 className="contact-header">
                                    ATShop
                                </h3>
                                <ul className="contact-socials">
                                    <li><a href="#">
                                        <i className='bx bxl-facebook-circle'></i>
                                    </a></li>
                                    <li><a href="#">
                                        <i className='bx bxl-instagram-alt'></i>
                                    </a></li>
                                    <li><a href="#">
                                        <i className='bx bxl-youtube'></i>
                                    </a></li>
                                    <li><a href="#">
                                        <i className='bx bxl-twitter'></i>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="subscribe">
                                <input type="email" placeholder="ENTER YOUR EMAIL" />
                                <button>subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Products