import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
export default function PlaceOrder() {
    const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <div>
          <form className='place-order'>
              <div className='place-order-left'>
                  <p className="title">Delivery Information</p>
                  <div className="multi-fields">
                      <input type="text" placeholder='First Name' /><input type="text" placeholder='Last Name'/>
                  </div>
                  
                  <input type="text" placeholder='Email address' /><input type="text" placeholder='Street'/>
              </div>
              <div className="multi-fields">
                      <input type="text" placeholder='City' /><input type="text" placeholder='State'/>
              </div>
              <div className="multi-fields">
                  <input type="text" placeholder='Zip code' /><input type="text" placeholder='Country' />
                  <input type="text" placeholder='Phone'/>
                  </div>
          <div className="place-order-right"></div></form>
    </div>
  )
}