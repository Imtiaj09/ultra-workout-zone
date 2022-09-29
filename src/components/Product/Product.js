import React from 'react';
import './Product.css'

const Product = (props) => {
  console.log(props)
  const { name, time, age, img } = props.product
  console.log(time)
  console.log(age)
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p>For Age: {age}</p>
        <p>Time required:{time}</p>
      </div>
      <button className='btn-cart'>
        <p>Add to list</p>
      </button>
    </div>
  );
};

export default Product;