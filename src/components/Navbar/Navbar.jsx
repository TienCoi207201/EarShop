import React from 'react'
import '../Navbar/Navbar.css'
import Blog from '../../pages/Blog/Blog';
import { Link } from "react-router-dom";

const Navbar = ({ Logo, products, User, Cart }) => {
    return (
        <>
        <header>
    
        <div class="mobile-menu bg-second">
            <a href="#" class="mb-logo">ATShop</a>
            <span class="mb-menu-toggle" id="mb-menu-toggle">
                <i class='bx bx-menu'></i>
            </span>
        </div>
        
        <div class="header-wrapper" id="header-wrapper">
            <span class="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                <i class='bx bx-x'></i>
            </span>
           
            <div class="bg-second">
                <div class="top-header container">
                    <ul class="devided">
                        <li>
                            <a href="#">+840123456789</a>
                        </li>
                        <li>
                            <a href="#">atshop@mail.com</a>
                        </li>
                    </ul>
                    <ul class="devided">
                        <li class="dropdown">
                            <a href="">USD</a>
                            <i class='bx bxs-chevron-down'></i>
                            <ul class="dropdown-content">
                                <li><a href="#">VND</a></li>
                                <li><a href="#">JPY</a></li>
                                <li><a href="#">EUR</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="">ENGLISH</a>
                            <i class='bx bxs-chevron-down'></i>
                            <ul class="dropdown-content">
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
           
            <div class="bg-main">
                <div class="mid-header container">
                    <a href="#" class="logo">ATShop</a>
                    <div class="search">
                        <input type="text" placeholder="Search"/>
                        <i class='bx bx-search-alt'></i>
                    </div>
                    <ul class="user-menu">
                        <li><a href="#"><i class='bx bx-bell'></i></a></li>
                        <li><a href="#"><i class='bx bx-user-circle'></i></a></li>
                        <li><a href="#"><i class='bx bx-cart'></i></a></li>
                    </ul>
                </div>
            </div>
          
            <div class="bg-second">
                <div class="bottom-header container">
                    <ul class="main-menu">
                        <li><a href="#">home</a></li>
                       
                        <li class="mega-dropdown">
                            <a href="./products.html">Shop<i class='bx bxs-chevron-down'></i></a>
                            <div class="mega-content">
                                <div class="row">
                                    <div class="col-3 col-md-12">
                                        <div class="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-3 col-md-12">
                                        <div class="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-3 col-md-12">
                                        <div class="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-3 col-md-12">
                                        <div class="box">
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
                                <div class="row img-row">
                                    <div class="col-3">
                                        <div class="box">
                                            <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="box">
                                            <img src="./images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="box">
                                            <img src="./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png" alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div class="box">
                                            <img src="./images/JBLHorizon_001_dvHAMaster.png" alt=""/>
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
    </>
    )
}


export default Navbar