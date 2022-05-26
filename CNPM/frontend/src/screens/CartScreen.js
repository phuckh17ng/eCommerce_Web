import './CartScreen.css'
import React from 'react';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";


const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCart = () =>{
    return dispatch({type:"CLEAR_CART"})
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };
  return (
    <>
    <div className="cartscreen">
      <div className="cartscreen__left">
            {cartItems.length === 0 ? (
              <div>
              Ồ! Có vẻ Quý Khách chưa chọn được món nào cả. <Link to="/">Menu</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={removeFromCartHandler}
                />
              ))
            )}
          </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
        <p>Tổng cộng ({getCartCount()}) món</p>
            <p>{getCartSubTotal()} VND</p>
          <p>
          <select className="cartscreen__order">
              <option value='1'><Link to='/at-table/'>Đặt dùng tại quán</Link></option>
              <option value='2'><Link to='/take-away/'>Đặt hàng mang đi</Link></option>
            </select>
          </p>
        </div>
        <div className='cartscreen__pay'>
        <Link to='/take-away/' >Thanh Toán</Link>
        </div>
      </div>
    </div>
    </>  
  )
}

export default CartScreen