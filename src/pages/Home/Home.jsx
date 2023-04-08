import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar';
import VNDFormat from '../../untils/CurrencyFormat';
import { FaCalendarAlt, FaBell, FaUser, FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"
import fakeData from '../../db.json'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, addWishlist } from '../../reduces/productSlice';


const Home = () => {
    const [data, setData] = useState([...fakeData]);

    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.productSlice.cart)
    // console.log("item:", cartItem)
    
    const addToCart = (item) => {
        const cart = [...cartItem,item]
        // cartItem.push(item)
        localStorage.setItem('cart',JSON.stringify(cart))
        dispatch(addProduct(item))
    }

    const addToWishlist = (item) => () => {
        dispatch(addWishlist(item))
    }

    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cartItem))
    },[])
    // useEffect(() => {
    //     axios.get('http://localhost:3000/products')
    //         .then(res => {
    //             setData(res.data)
    //         })
    //         .catch(error => console.log(error));
    // }, []);
    return (
        <>
            <Navbar />
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
                                        JBL nổi tiếng với các sản phẩm âm thanh chất lượng, mới đây hãng vừa cho ra mắt mẫu tai nghe mới - JBL Tune 750BTNC. Tai nghe JBL Tune 750BTNC với thiết kế chụp tai cùng âm thanh chất lượng hứa hẹn mang đến trải nghiệm ấn tượng cho người dùng.
                                    </p>
                                    <div className="top-down trans-delay-0-6">
                                        <button className="btn-flat btn-hover">
                                            <span>shop now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="img top-down">
                                <img src={`${require("../../image/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp")}`} alt="" />
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
                                <img src={`${require("../../image/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png")}`} alt="" />
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
                                <img src={`${require("../../image/JBL_JR 310BT_Product Image_Hero_Skyblue.png")}`} alt="" />
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
                            <img src={`${require("../../image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png")}`} alt="" />
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>JBL Quantum Series</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={`${require("../../image/JBL_QUANTUM ONE_Product Image_Angle.png")}`} alt="" />
                        </div>
                    </div>
                    <div className="col-4 col-md-12 col-sm-12">
                        <div className="promotion-box">
                            <div className="text">
                                <h3>True Wireless Earbuds</h3>
                                <button className="btn-flat btn-hover"><span>shop collection</span></button>
                            </div>
                            <img src={`${require("../../image/JBL_TUNE220TWS_ProductImage_Pink_Back.png")}`} alt="" />
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
                        {data?.map((e) => {
                            return (
                                <div key={e.id} className="col-3 col-md-6 col-sm-12">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <img src={e.link1} alt={e.title} />
                                        <img src={e.link2} alt={e.title} />
                                    </div>
                                    <div className="product-card-info">
                                        <div className="product-btn">
                                            <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                            <button onClick={()=>addToCart(e)} className="btn-flat btn-hover btn-cart-add">
                                                <FaCartPlus />
                                            </button>
                                            <button onClick={addToWishlist(e)} className="btn-flat btn-hover btn-cart-add">
                                                <FaHeart />
                                            </button>
                                        </div>
                                        <div className="product-card-name">
                                            {e.name}
                                        </div>
                                        <div className="product-card-price">
                                            <span><del>{VNDFormat(e.oldPrice)}</del></span>
                                            <span className="curr-price">{VNDFormat(e.newPrice)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        }).slice(0, 8)}
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
                                <img src={`${require("../../image/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png")}`} alt="" />
                            </div>
                        </div>
                        <div className="col-7 col-md-8">
                            <div className="sp-item-info">
                                <div className="sp-item-name">JBL Tune 220TWS</div>
                                <p className="sp-item-description">
                                    Thị trường tai nghe không dây đang ngày càng trở nên đa dạng hơn và mang những sản phẩm hiện đại hơn. Gần đây nhất, "ông lớn" trong lĩnh vực âm thanh JBL cũng đã gia nhập thị trường này với sản phẩm tai nghe không dây JBL Tune 220TWS. Với âm thanh mạnh mẽ, sử dụng dài lâu và có mức giá rẻ, JBL Tune 220TWS hứa hẹn sẽ gây chú ý mọi tín đồ công nghệ.
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
                        {data?.map((e, i) => (
                            <div key={e.id} className="col-3 col-md-6 col-sm-12">
                                <div className="product-card">
                                    <div className="product-card-img">
                                        <img src={e.link1} alt={e.title} />
                                        <img src={e.link2} alt={e.title} />
                                    </div>
                                    <div className="product-card-info">
                                        <div className="product-btn">
                                            <button className="btn-flat btn-hover btn-shop-now">Shop now</button>
                                            <button onClick={() => addToCart(e)} className="btn-flat btn-hover btn-cart-add">
                                                <FaCartPlus />
                                            </button>
                                            <button onClick={addToWishlist(e)} className="btn-flat btn-hover btn-cart-add">
                                                <FaHeart />
                                            </button>
                                        </div>
                                        <div className="product-card-name">
                                            {e.name}
                                        </div>
                                        <div className="product-card-price">
                                            <span><del>{VNDFormat(e.oldPrice)}</del></span>
                                            <span className="curr-price">{VNDFormat(e.newPrice)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )).slice(0, 8)}
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
                            <img src={`${require("../../image/JBL_Quantum400_Lifestyle1.png")}`} alt="" />
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
                            <img src={`${require("../../image/JBL_Tune_125TWS_Lifestyle2.png")}`} alt="" />
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
        </>
    )

}

export default Home