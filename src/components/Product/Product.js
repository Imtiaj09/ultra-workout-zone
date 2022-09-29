import React from 'react';
import './Product.css'

const Product = (props) => {
  const { name, time, age, img } = props.product
  return (
    <div className='product'>
      <img src={img} alt="" />
    </div>
  );
};

export default Product;