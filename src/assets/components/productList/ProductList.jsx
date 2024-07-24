import React from 'react';
import product from "../../api/product.json";
import "./ProductList.css";
import { useSelector } from 'react-redux';
import BeforeCart from './cartButton/BeforeCart';
import AfterCart from './cartButton/AfterCart';

function ProductList() {
  const { cartcount } = useSelector((state) => state.cart);

  return (
    <div className='container'>
      {product?.map((product, key) => (
        <div className='product-container' key={key}>
          <img src={product?.image} alt={product?.title} />
          <h3>{product?.title}</h3>
          {cartcount > 0 ? <AfterCart /> : <BeforeCart />}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
