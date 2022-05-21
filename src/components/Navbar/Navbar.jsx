import React from 'react'
import '../Navbar/Navbar.css'
import Avatar from '../../image/avatar_1.png'

const Navbar = ({ Logo, products, User, Cart }) => {
    return (
        <div className='header'>
            <a href='' className='logo'>
                <img src={Logo} />
            </a>
            <div className='menu'>
                <div className='item'>
                    <a href=''>Trang chủ</a>
                </div>
                <div className='item'>
                    <a href=''>Sản phẩm</a>
                </div>
                <div className='item'>
                    <a href=''>Blog</a>
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