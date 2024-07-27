import React, { useState }  from 'react';
import { useCart } from './cart';
import Form from 'react-bootstrap/Form';
import RemovefromCart from './RemovefromCart';
import { mobiles } from './Mobiles';
import { Tv } from './Tv';
import { ACs } from './ACs';
import Addtocartbutton from './Addtocartbutton';

const TopSection = () => {
 
  const {cartItems,removeFromCart,addToCart, showCart, setShowCart, updateItems} = useCart();
  const [selectedDetail, setSelectedDetail] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [showSearchItem, setShowSearchItem] = useState(false);
  const[displaygetproduct, setDisplaygetproduct] = useState([]);
  const allProducts = [...mobiles, ...Tv, ...ACs]
  console.log('cartitems', cartItems)


  const displaycart = () => {
    setShowCart(true);
    if(showCart){
      setShowCart(false)
    }
  }

  const searchHandler =(e) => {
    setSearchProduct(e.target.value);
    // console.log(searchProduct);
      setShowSearchItem(true);
    const getproduct= allProducts.filter((each) => {
      return each.name === searchProduct; 
    })
    setDisplaygetproduct([...getproduct])
    // console.log(displaygetproduct)
  }

  const handleDecrease =(b) => {
   const decrsditem = cartItems.filter((d) => {
    return d?.key === b})[0];
    if (decrsditem.quantity > 1) {
    const decQ = decrsditem.quantity - 1
    decrsditem.quantity = decQ
    updateItems(cartItems);
    } else{
      removeFromCart(decrsditem);
    }
  }

  const handleIncrease =(a) => {
      const increaseditem = cartItems.filter((i) => { 
        // console.log(i.item, i.item.key);
        return i?.key === a})[0]; 
      const q = increaseditem.quantity + 1 
      increaseditem.quantity = q;
      updateItems(cartItems);
  }

  return (
    <div>
      <div className='top-section'>
        <div className='logo'>
            <img src='https://asset.brandfetch.io/idWdImNSUt/id8QxyjDqY.svg' alt='' className='logo-image'/>
        </div>
          <div className='searchbar'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg> 
          <input type='text' placeholder='Search for Products' className='search' onChange={searchHandler}/>
          </div>
          <div className='login d-flex'>
            <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg> 
            </div>
            <div>
                <Form.Select value={selectedDetail} className="outer">
                    <option>Login</option>
                    <option>My Profile</option>
                    <option>Orders</option>
                    <option>wishlist</option>  
                </Form.Select>
            </div>
        </div>
          <div className='cart d-flex'>
          <div className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg>
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
            </div>
            <p onClick={displaycart}>  
            Cart
            </p>
          </div>
          </div>
          <div className='carts-card'>
          {showCart &&  cartItems.map((each) => {  
            return (   
        <div className='products-card'>
                  <div className='each-product'> 
                  <img src={each.image} alt='' className='product-image' />
                  <p> {each.name} </p>
                  <p> {each.price} </p>
                  <div className='d-flex justify-content-around'> 
                  <button className='btn btn-primary' onClick={() => handleIncrease(each.key)}>  
                  + </button>
                  <p className='mt-2'> Total items:{each.quantity}</p>
                  <button className='btn btn-primary' onClick={() => handleDecrease(each.key)}>  
                  - </button>
                  </div>
                  <RemovefromCart removeproduct={each}/>
                  </div>
                  </div>
          )
            }) }
             </div>

             <div>
              {displaygetproduct.length > 0  && displaygetproduct.map((each) => 
                <div className='products-card'>
               <div className='each-product'> 
            <img src={each.image} alt='' className='product-image' />
            <p> {each.name} </p>
            <p> {each.price} </p>
            <Addtocartbutton product={each}/>
            </div>
            </div>
              )}
             </div>
        </div>
  )
};

export default TopSection;
