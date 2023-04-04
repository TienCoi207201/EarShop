import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import VNDFormat from '../../untils/CurrencyFormat'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../reduces/productSlice'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom';

export default function Wishlist() {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.productSlice.cart)
    const wishlistItem = useSelector(state => state.productSlice.wishlist)
    const addToCart = (item) => () => {
        console.log("item", item);
        const cart = [...cartItem, item]
        // cartItem.push(item)
        localStorage.setItem('cart', JSON.stringify(cart))
        dispatch(addProduct(item));
    }
    return (
        <>
            <Navbar />
            <div className="box">
                <div className="row">
                    {   wishlistItem.length >=1 &&
                        wishlistItem.map(e => {
                            return (
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
                                                <button class="btn-flat btn-hover btn-cart-add">
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
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    );
}
