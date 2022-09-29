import React from 'react';
import './Product.css'

const Product = (props) => {
  console.log(props)
  const { handleAddToCart, product } = props;
  const { name, time, age, img } = product
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>For Age: {age}</p>
        <p>Time required: {time}s</p>
      </div>
      <button onClick={() => handleAddToCart(product)} className='btn-cart'>
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Product;