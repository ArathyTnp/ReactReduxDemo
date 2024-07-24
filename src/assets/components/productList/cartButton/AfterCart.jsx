import React from 'react';
import './CartButton.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from "../../../redux/cart";

function AfterCart() {
  const { cartcount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='after-cart'>
      <button className='cart-counter-button' onClick={() => dispatch(decrement())}>-</button>
      <div className='cart-count'>{cartcount}</div>
      <button className='cart-counter-button' onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default AfterCart;
