import React from 'react'
import './App.css'
import './script'
import './data'
import { FaCalendarAlt, FaBell, FaUser, FaCartPlus, FaHeart } from "react-icons/fa";
import Anh1 from './image/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png'
import Anh2 from './image/JBL_LIVE650BTNC_Product Image_Folded_Black.webp'
import Anh3 from './image/JBL_JR 310BT_Product Image_Detail_Skyblue.png'
import Anh4 from './image/JBLHorizon_001_dvHAMaster.png'
import Anh5 from './image/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp'
import Anh6 from './image/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png'
import Anh7 from './image/JBL_JR 310BT_Product Image_Hero_Skyblue.png'
import Anh8 from './image/JBLHorizon_BLK_002_dvHAMaster.webp'
import Anh9 from './image/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png'
import Anh10 from './image/JBL_Quantum400_Lifestyle1.png'
import Anh11 from './image/JBL_TUNE220TWS_Lifestyle_black.png'
import Anh12 from './image/JBL_Quantum_400_Product Image_Hero 02.png'
import Anh13 from './image/JBL_Quantum_400_Product Image_Hero Mic Up.webp'
import Anh14 from './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png'
import Anh15 from './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png'
import Anh16 from './image/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp'
import Anh17 from './image/JBL_QUANTUM ONE_Product Image_Angle.png'
import Anh18 from './image/JBL_Tune_125TWS_Lifestyle2.png'
import Anh19 from './image/JBL_TUNE220TWS_ProductImage_Pink_Back.png'
import Anh20 from './image/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp'
import { Link } from "react-router-dom"

const App = () => {
    return (
        <>
            <header>
                <div className="mobile-menu bg-second">
                    <a href="#" className="mb-logo">ATShop</a>
                    <span className="mb-menu-toggle">
                        <i className='bx bx-menu'></i>
                    </span>
                </div>

                <div className="header-wrapper" >
                    <span className="mb-menu-toggle mb-menu-close" >
                        <i className='bx bx-x'></i>
                    </span>

                    <div className="bg-second">
                        <div className="top-header container">
                            <ul className="devided">
                                <li>
                                    <a href="#">+84345199196</a>
                                </li>
                                <li>
                                    <a href="#">namtien9182@gmail</a>
                                </li>
                            </ul>
                            <ul className="devided">
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
                                <li><a href="#">home</a></li>

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
                                                    <img src={Anh2} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh3} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src={Anh4} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                <li><Link to={'/Blog'}>blog</Link></li>
                                <li><Link to={'/Contact'}>contact</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </header>

            <div className="hero">
                <div className="slider">
                    <div className="container">
                        <div className="slide active">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL TUNE 750TNC
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Next-gen design
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati dolor commodi dignissimos culpa, eaque eos necessitatibus possimus veniam, cupiditate rerum deleniti? Libero, ducimus error? Beatae velit dolore sint explicabo! Fugit.
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img top-down">
                                <img src={Anh5} alt="" />
                            </div>
                        </div>

                        <div className="slide">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL Quantum ONE
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Ipsum dolor
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio, voluptatum aperiam nobis quis maxime corporis porro alias soluta sunt quae consectetur aliquid blanditiis perspiciatis labore cumque, ullam, quam eligendi!
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>Shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img right-left">
                                <img src={Anh6} alt="" />
                            </div>
                        </div>

                        <div className="slide">
                            <div className="info">
                                <div className="info-content">
                                    <h3 className="top-down">
                                        JBL JR 310BT
                                    </h3>
                                    <h2 className="top-down trans-delay-0-2">
                                        Consectetur Elit
                                    </h2>
                                    <p className="top-down trans-delay-0-4">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo aut fugiat, libero magnam nemo inventore in tempora beatae officiis temporibus odit deserunt molestiae amet quam, asperiores, iure recusandae nulla labore!
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img left-right">
                                <img src={Anh7} alt="" />
                            </div>
                        </div>

                    </div>

                    <button className="slide-controll slide-next">
                        <i className='bx bxs-chevron-right'></i>
                    </button>
                    <button className="slide-controll slide-prev">
                        <i className='bx bxs-chevron-left'></i>
                    </button>

                </div>
            </div>



            <div className="promotion">
                <div className="row">
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>Headphone & Earbuds</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={Anh8} alt="" />
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>JBL Quantum Series</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={Anh9} alt="" />
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>True Wireless Earbuds</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={Anh2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Latest product</h2>
                    </div>
                    <div className="row">
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh12} alt="" />
                                    <img src={Anh13} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh3} alt="" />
                                    <img src={Anh7} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh1} alt="" />
                                    <img src={Anh5} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh4} alt="" />
                                    <img src={Anh8} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh9} alt="" />
                                    <img src={Anh19} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh14} alt="" />
                                    <img src={Anh15} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh16} alt="" />
                                    <img src={Anh20} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh2} alt="" />
                                    <img src={Anh6} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-footer">
                        <a href="./products.html" className="btn-flat btn-hover">view all</a>
                    </div>
                </div>
            </div>
            <div className="bg-second">
                <div className="section container">
                    <div className="row">
                        <div className="col-4 col-md-4">
                            <div className="sp-item-img">
                                <img src={Anh9} alt="" />
                            </div>
                        </div>
                        <div className="col-7 col-md-8">
                            <div className="sp-item-info">
                                <div className="sp-item-name">JBL TUNE 750TNC</div>
                                <p className="sp-item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dignissimos itaque et eaque quod harum vero autem? Reprehenderit enim non voluptate! Qui provident modi est non eius ratione, debitis iure.
                                </p>
                                <button className="btn-flat btn-hover">shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>Best selling</h2>
                    </div>
                    <div className="row">
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh12} alt="" />
                                    <img src={Anh13} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL Quantum 400
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>$300</del></span>
                                        <span className="curr-price">$200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh3} alt="" />
                                    <img src={Anh7} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh1} alt="" />
                                    <img src={Anh5} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh4} alt="" />
                                    <img src={Anh8} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh9} alt="" />
                                    <img src={Anh19} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh14} alt="" />
                                    <img src={Anh15} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh16} alt="" />
                                    <img src={Anh20} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3 col-md-6 col-sm-12">
                            <div className="product-card">
                                <div className="product-card-img">
                                    <img src={Anh2} alt="" />
                                    <img src={Anh6} alt="" />
                                </div>
                                <div className="product-card-info">
                                    <div className="product-btn">
                                        <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaCartPlus />
                                        </button>
                                        <button className="btn-flat btn-hover btn-cart-add">
                                            <FaHeart />
                                        </button>
                                    </div>
                                    <div className="product-card-name">
                                        JBL
                                    </div>
                                    <div className="product-card-price">
                                        <span><del>10000</del></span>
                                        <span className="curr-price"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section-footer">
                        <a href="./products.html" className="btn-flat btn-hover">view all</a>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>latest blog</h2>
                    </div>
                    <div className="blog">
                        <div className="blog-img">
                            <img src={Anh10} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="blog-preview">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi doloremque praesentium laudantium repellat.
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="blog row-revere">
                        <div className="blog-img">
                            <img src={Anh11} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Lorem ipsum dolor sit amet
                            </div>
                            <div className="blog-preview">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, eligendi dolore. Sapiente omnis numquam mollitia asperiores animi, veritatis sint illo magnam, voluptatum labore, quam ducimus! Nisi doloremque praesentium laudantium repellat.
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="section-footer">
                        <a href="#" className="btn-flat btn-hover">view all</a>
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
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App