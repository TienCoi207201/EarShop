import React from 'react'
import '../Navbar/Navbar.css'
import Blog from '../../pages/Blog/Blog';
import { Link } from "react-router-dom";

const Navbar = ({ Logo, products, User, Cart }) => {
    return (
        <div className='header'>
            <a href='' className='logo'>
                <img src={Logo} />
            </a>
            <div className='menu'>
                <div className='item'>
                    <Link to={'/'}>Trang chủ</Link>
                </div>
                <div className='item'>
                    <a href=''>Sản phẩm</a>
                </div>
                <div className='item'>
                    <Link to={'/Blog'}>Blog</Link>
                </div>
                <div className='item'>
                    <a href=''>Liên hệ</a>
                </div>
                <div className='item'>
                    <a href=''>Khuyến mãi</a>
                </div>
            </div>
            <div className='actions'>
                <div className='item'>
                    <img src={User} />
                </div>
                <div className='item'>
                    <img src={Cart} />
                </div>
            </div>
        </div>
    )
}

export default Navbar