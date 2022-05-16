import React from 'react'
import "./header.css"
export default function header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <img className='logo' src='https://acecookvietnam.vn/wp-content/themes/acecook/assets/images/logo_footer.png'/>
        </div>
        <div className='header-right'>
            <div>
                <ul className='menu'>
                    <a><li className='menu-item'>Trang chủ</li></a>
                    <a><li className='menu-item'>Hoạt động</li></a>
                    <a><li className='menu-item'>Khuyến mãi</li></a>
                    <a><li className='menu-item'>Về hảo hảo</li></a>
                    <a><li className='menu-item'>Liên hệ</li></a>
                </ul>
            </div>
        </div>
    </div>
  )
}
