import React from 'react'
import { mobiles } from './Mobiles'
import Addtocartbutton from './Addtocartbutton';

const MobileDisplay = () => {
  mobiles.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
    <h4> Mobiles</h4>
    <div className='products-card'>
      { mobiles.map((each) => {
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
    </>
  )
}

export default MobileDisplay;
