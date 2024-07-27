import React from 'react'
import {Tv} from './Tv';
import { useCart } from './cart';
import Addtocartbutton from './Addtocartbutton';

const Tvdisplay = () => {
  Tv.sort((a, b) => a.name.localeCompare(b.name));
  console.log(Tv)
  return (
    <div className='mt-4'>
    <h4> Telivisions </h4>
    <div className='products-card'>
      
      { Tv.map((each) => {
        return(
          <div>
            <div className='each-product'> 
            <img src={each.image} alt='' className='product-image' />
            <p> {each.name} </p>
            <p> {each.price} </p>
            <Addtocartbutton product={each}/>
            </div>
            </div>
        )
      } )}
    </div>
    </div>
  )
};

export default Tvdisplay;
