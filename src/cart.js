import {createContext, useContext, useState} from 'react';
const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const[showCart, setShowCart] = useState(false);

    const addToCart = (item) => {
        setCartItems(cartItems => {
          // Check if the item already exists in the cart
          const existingItem = cartItems.find(each => each.key === item.key);
          
          if (existingItem) {
            // If the item exists, update its quantity
            return cartItems.map(each => 
              each.key === item.key 
                ? { ...each, quantity: each.quantity + 1 } 
                : each
            );
          } else {
            // If the item does not exist, add it with quantity 1
            return [...cartItems, { ...item, quantity: 1 }];
        }
    });
  };
    const removeFromCart = (item )=> {
        setCartItems( cartItems.filter((each) => each.key !== item.key))
    }

    const updateItems = (items) => {
        setCartItems([...items]);
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, showCart, setShowCart, updateItems}} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart =() =>{
    return useContext(CartContext)
}


