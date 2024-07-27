import React from 'react'
import { useCart } from './cart'
const RemovefromCart = ({removeproduct}) => {

    const {removeFromCart} = useCart();
  return (
    <div className='mt-3'>
      <button className='btn btn-warning' onClick={() => removeFromCart(removeproduct)} > Delete </button>
    </div> 
  )
}

export default RemovefromCart
