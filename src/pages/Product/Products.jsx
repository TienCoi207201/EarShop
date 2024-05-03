import React, { useEffect, useState } from 'react'
import { Checkbox } from 'antd'
import { Link } from "react-router-dom"
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar'
import VNDFormat from '../../untils/CurrencyFormat'
import { FaBell, FaCartPlus, FaUser } from 'react-icons/fa'
import axios from 'axios'
import fakeData from '../../db.json'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, addWishlist, filterProduct } from '../../reduces/productSlice'
import Footer from '../../components/Footer/Footer'


const Products = () => {
    const [data, setData] = useState([...fakeData]);
    const dispatch = useDispatch()
    const [listSelected, setListSelected] = useState([]);
    const handleOnChange = (id) => {
        const isChecked = listSelected.includes(id);
        setListSelected(prev => (
            isChecked
                ? prev.filter(id => id !== id) 
                : [...prev, id]
        ));
        const filterData = data.filter(id === id)
        setData(filterData)
    };
    const brand = [
        {
            id: 1,
            name: 'JBL'
        },
        {
            id: 2,
            name: 'Ear Case'
        },
        {
            id: 3,
            name: 'Logitech'
        },
        {
            id: 4,
            name: 'ASUS'
        }
    ]
    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(data))
    }, [data])

    // useEffect(() => {
    //     axios.get('http://localhost:3000/products')
    //         .then(res => {
    //             setData(res.data)
    //             console.log(res.data);
    //         })
    //         .catch(error => console.log(error));
    // }, []);
    const cartItem = useSelector(state => state.productSlice.cart)
    const product = useSelector(state => state.productSlice.product)
    const addToCart = (item) => () => {
        const cart = [...cartItem, item]
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(addProduct(item));
    }

    const addToWishlist = (item) => () => {
        dispatch(addWishlist(item))
    }

    const handleFilterProduct = (e) => {
        // dispatch(filterProduct(e))
        console.log(e)
    }
    return (
        <div>
            <Navbar />
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
                                                <input type="checkbox" className="status1" checked />
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
                                        {brand && brand.map((item, index) => {
                                            const isChecked = listSelected?.includes(item.id);
                                            console.log(isChecked)
                                            return (
                                                <li key={item.id}>
                                                    <div className="group-checkbox">
                                                        <input checked={isChecked} onChange={() => handleOnChange(item.id)} type="checkbox" className="remember1" />
                                                        <label for="remember1">
                                                            {item.name}
                                                        </label>
                                                    </div>
                                                </li>
                                            )
                                        })}
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
                                        {data?.map((e, i) => (
                                            <div class="col-4 col-md-6 col-sm-12">
                                                <div class="product-card">
                                                    <div class="product-card-img">
                                                        <img src={e.link1} alt={e.title} />
                                                        <img src={e.link2} alt={e.title} />
                                                    </div>
                                                    <div class="product-card-info">
                                                        <div class="product-btn">
                                                            <Link to={`/Detail/${e.id}`} class="btn-flat btn-hover btn-shop-now">shop now</Link>
                                                            <button onClick={addToCart(e)} class="btn-flat btn-hover btn-cart-add">
                                                                <i class='bx bxs-cart-add'></i>
                                                            </button>
                                                            <button onClick={addToWishlist(e)} class="btn-flat btn-hover btn-cart-add">
                                                                <i class='bx bxs-heart'></i>
                                                            </button>
                                                        </div>
                                                        <div class="product-card-name">
                                                            {e.name}
                                                        </div>
                                                        <div class="product-card-price">
                                                            <span><del>{VNDFormat(e.oldPrice)}</del></span>
                                                            <span class="curr-price">{VNDFormat(e.newPrice)}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
            <Footer />
        </div>
    )
}

export default Products