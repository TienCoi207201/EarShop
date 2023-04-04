import React from 'react'
import '../Navbar/Navbar.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartData = useSelector(state => state.productSlice.cart)
    return (
        <>
            <header>
                <div className="mobile-menu bg-second">
                    <Link to={'/'} className="mb-logo">EarShop</Link>
                    <span className="mb-menu-toggle" id="mb-menu-toggle">
                        <i className='bx bx-menu'></i>
                    </span>
                </div>

                <div className="header-wrapper" id="header-wrapper">
                    <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                        <i className='bx bx-x'></i>
                    </span>

                    <div className="bg-second">
                        <div className="top-header container">
                            <ul className="devided">
                                <li>
                                    <a href="#">+84345199196</a>
                                </li>
                                <li>
                                    <a href="mailto:namtien9182@gmail.com">namtien9182@gmail.com</a>
                                </li>
                            </ul>
                            <ul className="devided">
                                <li className="dropdown">
                                    <Link to={'/New'}>USD</Link>
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
                            <Link to={'/'} className="logo">EarShop</Link>
                            <div className="search">
                                <input type="text" placeholder="Search" />
                                <i className='bx bx-search-alt'></i>
                            </div>
                            <ul className="user-menu">
                                <li><Link to={'/Wishlist'}><i className='bx bx-heart'></i></Link></li>
                                <li><a href="#"><i className='bx bx-user-circle'></i></a></li>
                                <li>
                                    <Link to={'/Cart'}><i className='bx bx-cart'></i></Link>
                                    <p id='cart-length'>{cartData.length}</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-second">
                        <div className="bottom-header container">
                            <ul className="main-menu">
                                <li><Link to={'/'}>home</Link></li>

                                <li className="mega-dropdown">
                                    <Link to={'/Products'}>Shop<i className='bx bxs-chevron-down'></i></Link>
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
                                                    <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="./images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="box">
                                                    <img src="./images/JBLHorizon_001_dvHAMaster.png" alt="" />
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
        </>
    )
}


export default Navbar