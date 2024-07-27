import React from 'react'
import { ACs } from './ACs';
import { useCart } from './cart';
import Addtocartbutton from './Addtocartbutton';

const ACDisplay = () => {
  ACs.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className='mt-4'>
    <h4> Air Conditioners</h4>
    <div className='products-card'>
      { ACs.map((each) => {
        return(
          <div>
            <div className='each-product'> 
            <img src={each.image} alt='' className='product-image' />
            <p> {each.name} </p>
            <p> {each.price} </p>
            <Addtocartbutton product={each} />
            </div>
            </div>
        )
      } )}
    </div>
    </div>
  )
};

export default ACDisplay;
