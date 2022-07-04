import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import '../../App.css'
import Anh1 from '../../image/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
import Anh2 from '../../image/JBL_LIVE650BTNC_Product Image_Folded_Black.webp'
import Anh3 from '../../image/JBL_JR 310BT_Product Image_Detail_Skyblue.png'
import Anh4 from '../../image/JBLHorizon_001_dvHAMaster.png'
import Anh5 from '../../image/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp'
import Anh6 from '../../image/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
import Anh7 from '../../image/JBL_JR 310BT_Product Image_Hero_Skyblue.png'
import Anh8 from '../../image/JBLHorizon_BLK_002_dvHAMaster.webp'
import Anh9 from '../../image/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png'
import Anh10 from '../../image/JBL_Quantum400_Lifestyle1.png'
import Anh11 from '../../image/JBL_TUNE220TWS_Lifestyle_black.png'
import Anh12 from '../../image/JBL_Quantum_400_Product Image_Hero 02.png'
import Anh13 from '../../image/JBL_Quantum_400_Product Image_Hero Mic Up.webp'
import Anh14 from '../../image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png'
import Anh15 from '../../image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png'
import Anh16 from '../../image/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp'
import Anh17 from '../../image/JBL_QUANTUM ONE_Product Image_Angle.png'
import Anh18 from '../../image/JBL_Tune_125TWS_Lifestyle2.png'
import Anh19 from '../../image/JBL_TUNE220TWS_ProductImage_Pink_Back.png'
import Anh20 from '../../image/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp'
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
            <header>     
                <div className="mobile-menu bg-second">
                    <Link to={'/'} className="mb-logo">ATShop</Link>
                    <span className="mb-menu-toggle">
                        <i className='bx bx-menu'></i>
                    </span>
                </div>
                <div className="header-wrapper">
                    <span className="mb-menu-toggle mb-menu-close" >
                        <i className='bx bx-x'></i>
                    </span>
                    <div className="bg-second">
                        <div className="top-header container">
                            <ul className="devclassNameed">
                                <li>
                                    <a href="#">+84345199196</a>
                                </li>
                                <li>
                                    <a href="#">namtien9182@gmail.com</a>
                                </li>
                            </ul>
                            <ul className="devclassNameed">
                                <li className="dropdown">
                                    <a href="">USD</a>
                                    <i className='bx bxs-chevron-down'></i>
                                    <ul className="dropdown-content">
                                        <li><a href="#">VND</a></li>
                                        <li><a href="#">JPY</a></li>
                                        <li><a href="#">EUR</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="">ENGLISH</a>
                                    <i className='bx bxs-chevron-down'></i>
                                    <ul className="dropdown-content">
                                        <li><a href="#">VIETNAMESE</a></li>
                                        <li><a href="#">JAPANESE</a></li>
                                        <li><a href="#">FRENCH</a></li>
                                        <li><a href="#">SPANISH</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">ORDER TRACKING</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-main">
                        <div className="mid-header container">
                            <a href="#" className="logo">ATShop</a>
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <i className='bx bx-search-alt'></i>
                            </div>
                            <ul className="user-menu">
                                <li><a href="#"><FaBell /></a></li>
                                <li><a href="#"><FaUser /></a></li>
                                <li><a href="#"><FaCartPlus /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-second">
                        <div className="bottom-header container">
                            <ul className="main-menu">
                                <li><Link to={'/'}>Home</Link></li>
                                <li className="mega-dropdown">
                                    <Link to={'./Products'}>Shop<i className='bx bxs-chevron-down'></i></Link>
                                    <div className="mega-content">
                                        <div className="row">
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li><a href="#">Wireless</a></li>
                                                        <li><a href="#">Inear headphone</a></li>
                                                        <li><a href="#">Overear headphone</a></li>
                                                        <li><a href="#">sport headphone</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li><a href="#">Wireless</a></li>
                                                        <li><a href="#">Inear headphone</a></li>
                                                        <li><a href="#">Overear headphone</a></li>
                                                        <li><a href="#">sport headphone</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li><a href="#">Wireless</a></li>
                                                        <li><a href="#">Inear headphone</a></li>
                                                        <li><a href="#">Overear headphone</a></li>
                                                        <li><a href="#">sport headphone</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-3 col-md-12">
                                                <div className="box">
                                                    <h3>Categories</h3>
                                                    <ul>
                                                        <li><a href="#">Wireless</a></li>
                                                        <li><a href="#">Inear headphone</a></li>
                                                        <li><a href="#">Overear headphone</a></li>
                                                        <li><a href="#">sport headphone</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row img-row">
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh1} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh9} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh7} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh8} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li><a href="#">blog</a></li>
                                <li><a href="#">contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
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
                                                <input type="checkbox" className="status1" />
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
                                                <input type="checkbox" className="remember1" checked="checked" />
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
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                <div class="product-card-img">
                                                    <img src={Anh1} alt="" />
                                                    <img src={Anh2} alt="" />
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-cart-add'></i>
                                                        </button>
                                                        <button class="btn-flat btn-hover btn-cart-add">
                                                            <i class='bx bxs-heart'></i>
                                                        </button>
                                                    </div>
                                                    <div class="product-card-name">
                                                        JBL
                                                    </div>
                                                    <div class="product-card-price">
                                                        <span><del>200</del></span>
                                                        <span class="curr-price">300</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-6 col-sm-12">
                                            <div class="product-card">
                                                {data?.map((e, i) => (
                                                    <>
                                                    <div class="product-card-img">
                                                    <img src={`${require("../../image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png")}`} alt="" />
                                                    {/* <img src={`${require("e.link2")}`} alt="" /> */}
                                                </div>
                                                <div class="product-card-info">
                                                    <div class="product-btn">
                                                        <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
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
                                                        <span><del>{e.oldPrice}</del></span>
                                                        <span class="curr-price">{e.newPrice}</span>
                                                    </div>
                                                </div>
                                                </>
                                                ))}
                                                
                                            </div>
                                        </div>
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