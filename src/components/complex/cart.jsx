import React from 'react';
import { useState, useEffect } from 'react';
import CartActionsHandler from '../../services/CartActionsHandler';
import { convertPrice } from '../../services/Currency';


const Cart = ({selectedCurrency, currencyRates}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [cartItems, setCartItems] = useState([]); // Cart state
   
// Load cart items from 'cart-products' in localStorage when the component mounts
   useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart-products')) || [];
    setCartItems(storedCartItems);
  }, []);
// Function to update localStorage
const updateLocalStorage = (updatedCartItems) => {
  localStorage.setItem('cart-products', JSON.stringify(updatedCartItems));
};
 // Function to remove item from cart and update localStorage
 const handleRemove = (productId) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== productId);
  setCartItems(updatedCartItems); // Update state
  updateLocalStorage(updatedCartItems); // Update localStorage
};
 // Function to convert cart item prices based on selected currency
 const convertCartItemPrice = (priceInEUR) => {
  if (currencyRates[selectedCurrency]) {
    return convertPrice(priceInEUR, selectedCurrency, currencyRates);
  }
  return priceInEUR; // Default to EUR if no rate available
};
  // Function to calculate total price with currency conversion
  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => {
      // Convert price based on the selected currency
      const convertedPrice = convertPrice(item.price, selectedCurrency, currencyRates);
      return acc + convertedPrice * item.quantity;
    }, 0);
    
    return total.toFixed(2);  // Return the total, rounded to 2 decimal places
  };
const { updateCartQuantity } = CartActionsHandler({ cartItems, setCartItems });

  const handlePopupOpen = (description) => {
    setCurrentDescription(description);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setCurrentDescription('');
  };

  return (
    <div className='cart'>
      <h2>Cart summary</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p> 
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-item'>
                <div className='cart-item-details'>
                  <h3 className='product-name'>{item.product_name}</h3>
                  <p className='product-price'>
                  {(convertCartItemPrice(item.price) * item.quantity).toFixed(2)} {selectedCurrency}
                  </p>

                  <button
                    className='description-btn'
                    onClick={() => handlePopupOpen(item.content)}
                  >
                    Details
                  </button>
                </div>
                <button
                  className='quantity-btn'
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className='quantity-btn'
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>

                <button
                  className='remove-btn'
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {/* Display the total price */}
          <div className='cart-total'>
            <h3>Total Price: {calculateTotal()} {selectedCurrency}</h3>
          </div> 
        </>
      )}
      {/* Popup for product description */}
      {showPopup && (
        <div className='popup-overlay'>
          <div className='popup'>
            <h3>Product Description</h3>
            <p>{currentDescription}</p>
            <button className='close-btn' onClick={handlePopupClose}>
              Close
            </button>           
          </div>
        </div>
      )}
    </div>
    );
};

export default Cart;
