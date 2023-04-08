import React from 'react'
import './Contact.css'
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';


const Contact = () => {
    return (
        <div id='wrapper'>
            <Navbar />
            <form id='form_control'>
                <div id='box'>
                    <div id='content_left'>
                        <div className='input_item'>
                            <p className='title'>Họ và tên</p>
                            <input className='input' placeholder='Họ và tên...' />
                        </div>
                        <div className='input_item'>
                            <p className='title'>Email</p>
                            <input className='input' placeholder='Email...' />
                        </div>
                        <div className='input_item'>
                            <p className='title'>Số điện thoại</p>
                            <input className='input' placeholder='Số điện thoại...' />
                        </div>
                    </div>
                    <div id='content_right'>
                        <p className='title'>Tin nhắn</p>
                        <textarea className='input area' placeholder='Tin nhắn...' />
                    </div>
                </div>
                <button id='btn' type='submit'>Gửi</button>
            </form>
            <div class="col-md-5 d-flex align-items-stretch">
                <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
                    <h3 class="mb-4 mt-md-4">Liên hệ</h3>
                    <div class="dbox w-100 d-flex align-items-start">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text pl-3">
                            <p><span>Địa chỉ:</span> 235 </p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-phone"></span>
                        </div>
                        <div class="text pl-3">
                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-paper-plane"></span>
                        </div>
                        <div class="text pl-3">
                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                        </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                            <span class="fa fa-globe"></span>
                        </div>
                        <div class="text pl-3">
                            <p><span>Website</span> <a href="#">yoursite.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default Contact