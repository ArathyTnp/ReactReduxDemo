import React from 'react';
import './CartButton.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/cart';

function BeforeCart() {
  const dispatch = useDispatch();
  return (
    <div className='before-cart'>
      <button className='add-cart-button' onClick={() => dispatch(addToCart())}>Add to cart</button>
    </div>
  );
}

export default BeforeCart;
