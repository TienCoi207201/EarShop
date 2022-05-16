import React from 'react'
import './footer.css'
export default function footer() {
  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src='https://acecookvietnam.vn/wp-content/themes/acecook/assets/images/logo_footer.png' />
      </div>
      <div className='footer-mid'>
        <p className='text-footer'>BẢN QUYỀN © 2020 THUỘC VỀ ACECOOK VIET NAM</p>

        <p>CÔNG TY CỔ PHẦN ACECOOK VIỆT NAM</p>
        <p>Địa chỉ: Lô số II-3,Đường số 11,Nhóm CN II, Khu Công nghiệp Tân Bình, Phường Tây Thạnh, Quận<br/>
        Tân Phú, Thành phố Hồ Chí Minh, Việt Nam</p>
        <p>Điện thoại: 0345199196</p>
        <p>Email: namtien9182@gmail.com</p>
        <p>Mã số doanh nghiệp: 0300808687 , đăng ký lần đầu ngày 20/7/2001</p>
        <p>Cấp bởi: Sở kế hoạch và Đầu tư Tp. Bắc Ninh</p>
      </div>
      <div className='footer-right'>
        <a href='#' className='link-footer'><p>Điều khoản sử dụng</p></a>
        <a href='#' className='link-footer'><p>Giới thiệu</p></a>
        <a href='#' className='link-footer'><p>Hoạt động</p></a>
        <a href='#' className='link-footer'><p>Khuyến mãi</p></a>
        <a href='#' className='link-footer'><p>Về Hảo hảo</p></a>
        <a href='#' className='link-footer'><p>Liên hệ</p></a>
      </div>
    </div>
  )
}
