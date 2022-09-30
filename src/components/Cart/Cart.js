import React from 'react';
import './Cart.css'
import img from '../../images/author.JPG'

const Cart = (props) => {
  const { cart } = props
  let totalT = 0;
  for (const product of cart) {
    totalT = totalT + product.time;
  }

  return (
    <div className='cart'>
      <div className='detail'>
        <img src={img} alt="" />
        <div>
          <p>A. H. M. Imtiaj: {cart.length}</p>
          <p><small>Dhaka, Bangladesh</small></p>
        </div>
      </div>
      <div className='detail-phy'>
        <div className='physical-detail'>
          <p>68<small>kg</small></p>
          <p>5.11</p>
          <p>22<small>yrs</small></p>
        </div>
        <div className='detail-name'>
          <p>Weight</p>
          <p>Height</p>
          <p>Age</p>
        </div>
      </div>
      <h4>Add A Break</h4>
      <div className='br-time'>
        <div className='time'>
          <p>10s</p>
        </div>
        <div className='time'>
          <p>20s</p>
        </div>
        <div className='time'>
          <p>30s</p>
        </div>
        <div className='time'>
          <p>40s</p>
        </div>
      </div>
      <h4>Exercise Details</h4>
      <div className='exercise-time'>
        <h4>Exercise time</h4>
        <p>{totalT} seconds</p>
      </div>
      <br />
      <div className='break-time'>
        <h4>Break time</h4>
        <p>00 seconds</p>
      </div>
      <br />
      <button className='btn-comp'>
        <p>Activity Completed</p>
      </button>
    </div>
  );
};

export default Cart;