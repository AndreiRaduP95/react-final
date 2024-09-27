import React from 'react';
import { useState, useEffect } from 'react';


const Cart = ({ onRemove, onUpdateQuantity }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentDescription, setCurrentDescription] = useState('');
  const [cartItems, setCartItems] = useState([]); // Cart state

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2); // Ensure total is rounded to 2 decimal places
  };

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
      <h2>Cart details</h2>
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='cart-item'>
                <div className='cart-item-details'>
                  <h3 className='product-name'>{item.product_name}</h3>
                  <p className='product-price'>
                    {(item.price * item.quantity).toFixed(2)} USD
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
                  onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  className='quantity-btn'
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>

                <button
                  className='remove-btn'
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          {/* Display the total price */}
          <div className='cart-total'>
            <h3>Total Price: {calculateTotal()} USD</h3>
          </div>
        </>
    

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
