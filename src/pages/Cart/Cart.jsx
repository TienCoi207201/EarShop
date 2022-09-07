import React from 'react'
import '../Cart/Cart.scss'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import VNDFormat from '../../untils/CurrencyFormat'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Cart = () => {
  // const dispatch = useDispatch();
  const cartData = useSelector(store => store.productsReducer.cart)
  console.log("cart data", cartData);
  return (
    <div className="small-container cart-page">
      <Navbar />
          <div id='page-wrapper'>
            <div className='wrapper'>
              <div className='inner'>
                <h1>Giỏ hàng</h1>
                <table>
                  <thead>
                    <tr className='head_name'>
                      <th colspan="2" >Thông tin chi tiết sản phẩm</th>
                      <th >Đơn giá</th>
                      <th >Số lượng</th>
                      <th >Tổng giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartData?.map((item, i) => {
                      return (
                        <tr>
                          <td>
                            <a className='cart-image' href=''>
                              <img className='store-image-left-item-pic' src={e?.image}pi alt={'hg_img_thumb6'} />
                            </a>
                          </td>
                          <td>
                            <a href="" class="h4">{item?.title}</a>

                            <small class="cart_remove">Xóa</small>
                          </td>
                          <td> <span class="h3">{VNDFormat(item?.newPrice)} </span> </td>
                          <td>
                            <div className='js-qty'>
                              <div className='decrease'>-</div>
                              <input className='input-quantity' value={item?.quantity} style={{ textAlign: 'center' }} />
                              <div className='increase'>+</div>
                            </div>
                          </td>
                          <td> <span class="h3"> {VNDFormat(item?.newPrice * item?.quantity)}	</span> </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                <div className='cart_button'>
                  <button type="submit" name="update" className="update-cart">Cập nhật</button>
                  <button type="submit" name="checkout" className="check-out-cart">Thanh toán</button>
                </div>
              </div>
            </div>
          </div>
        )
        // <table className='cart-page'>
        //   return(
        //   <tr>
        //     <th>Sản phẩm</th>
        //     <th>Số lượng</th>
        //     <th>Đơn giá</th>
        //   </tr>
        //   <tr>
        //     <td>
        //       <div className="cart-info">
        //         <img src={e.image?.[0]} />
        //         <div>
        //           <p>{e?.name}</p>
        //           <small>Price:{VNDFormat(e?.newPrice)}</small><br/>
        //           <a href='#'>Remove</a>
        //         </div>
        //       </div>
        //     </td>
        //     <td><input type="number" value={e?.quantity}/></td>
        //     <td>{VNDFormat(e?.newPrice*e?.quantity)}</td>
        //   </tr>
        //   )
        // </table>
      {/* <div className="total-price">
        <table>
          <tr>
            <td>Tổng tiền</td>
            <td>{VNDFormat(50000)}</td>
          </tr>
          <tr>
            <td>Thuế</td>
            <td>{VNDFormat(50000)}</td>
          </tr>
          <tr>
            <td>Thanh toán</td>
            <td>{VNDFormat(50000)}</td>
          </tr>
        </table>
      </div> */}
      <Footer />
    </div>
  )
}

export default Cart