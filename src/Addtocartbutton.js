import React from 'react'
import { useCart } from './cart'
const Addtocartbutton = ({product}) => {

    const {addToCart, cartItems} = useCart();
  return (
    <div>
      <button className='btn btn-warning' onClick={() => addToCart(product)} > Add to cart</button>
    </div> 
  )
}

export default Addtocartbutton
