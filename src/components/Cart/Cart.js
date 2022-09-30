import React, { useState } from 'react';
import './Cart.css'
import img from '../../images/author.JPG'

const Cart = (props) => {
  const { cart } = props
  let totalT = 0;
  for (const product of cart) {
    totalT = totalT + product.time;
  }
  let state = 0;
  const oldTime = localStorage.getItem('brTime')
  if (oldTime) {
    state = oldTime
  }
  const [breakT, setBreakT] = useState(state)

  const handleBreakTime = (time) => {
    setBreakT(time)
    localStorage.setItem('brTime', time)
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
          <button onClick={() => handleBreakTime(10)}>10s</button>
        </div>
        <div className='time'>
          <button onClick={() => handleBreakTime(20)}>20s</button>
        </div>
        <div className='time'>
          <button onClick={() => handleBreakTime(30)}>30s</button>
        </div>
        <div className='time'>
          <button onClick={() => handleBreakTime(40)}>40s</button>
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
        <p>{breakT} seconds</p>
      </div>
      <br />
      <button className='btn-comp'>
        <p>Activity Completed</p>
      </button>
    </div>
  );
};

export default Cart;