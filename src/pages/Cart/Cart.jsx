import React from 'react'
import '../Cart/Cart.scss'
import { useSelector, useDispatch } from 'react-redux'
import VNDFormat from '../../untils/CurrencyFormat'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { removeCart, changeQuantity, payment } from '../../reduces/productSlice'
import { useNavigate } from 'react-router'

const Cart = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.productSlice.cart)
  const navigate = useNavigate()
  const removeItem = (e) => () => {
    dispatch(removeCart(e))
  }
  const onChangeInput = (item) => (ev) => {
    // gửi item đã thay đổi quantity vào reducer (quantity là ev.target.value)
    dispatch(changeQuantity({ ...item, quantity: ev.target.value })); // item mới đã thay đổi quantity
  };

  const onChangeQuantity = (type, item) => () => {
    if (type === 'increase') {
      dispatch(changeQuantity({ ...item, quantity: Number(item?.quantity) + 1 }));
    } else {
      dispatch(changeQuantity({ ...item, quantity: item?.quantity >= 1 ? Number(item?.quantity) - 1 : 0 }));
    }
  }

  const totalPrice = cartData.reduce((total, item) => {
    return total + item?.quantity * Number(item?.newPrice)
  }, 0)

  const pay = () => {
    alert("Thanh toán thành công");
    dispatch(payment());
    navigate('/')
  }
  return (
    <div className="small-container cart-page">
      <Navbar />
      {cartData.length >= 1 ? (
        <div id='page-wrapper'>
          <div className='wrapper'>
            <div className='inner'>
              <h1>Giỏ hàng</h1>
              <table>
                <thead>
                  <tr className='head_name'>
                    <th colSpan={2} >Thông tin chi tiết sản phẩm</th>
                    <th >Đơn giá</th>
                    <th >Số lượng</th>
                    <th >Tổng giá</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData?.map((item, i) => {
                    return (
                      <tr key={i}>
                        <td>
                          <a className='cart-image' href=''>
                            <img className='store-image-left-item-pic' src={item?.link1} alt={item.name} />
                          </a>
                        </td>
                        <td>
                          <a href="" className="h4">{item?.title}</a>

                          <button onClick={removeItem(item)} className="cart_remove">Xóa</button>
                        </td>
                        <td> <span className="h3">{VNDFormat(item?.newPrice)} </span> </td>
                        <td>
                          <div className='js-qty'>
                            <div className='decrease' onClick={onChangeQuantity('reduce', item)}>-</div>
                            <input
                              className='input-quantity'
                              value={item?.quantity}
                              onChange={onChangeInput(item)}
                              style={{ textAlign: 'center' }} />
                            <div className='increase' onClick={onChangeQuantity('increase', item)}>+</div>
                          </div>
                        </td>
                        <td><span className="h3"> {VNDFormat(item?.newPrice * item?.quantity)}</span></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
              <div className='cart_button'>
                <p>{VNDFormat(totalPrice)}</p>
                <button onClick={pay} type="submit" name="checkout" className="check-out-cart">Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div id='empty-cart'>
          <img src={require('../../image/cart-empty.png')} alt='Giỏ hàng rỗng' />
          <p>Giỏ hàng rỗng</p>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Cart