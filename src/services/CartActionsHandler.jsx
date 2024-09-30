const CartActionsHandler = ({ cartItems, setCartItems }) => {
  
  // Function to update localStorage after modifying the cart
  const updateLocalStorage = (updatedCartItems) => {
    localStorage.setItem('cart-products', JSON.stringify(updatedCartItems));
  };

  // Update product quantity in cart
  const updateCartQuantity = (productId, quantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === productId
        ? { ...item, quantity: Math.max(quantity, 1) } // Ensure quantity is at least 1
        : item
    );
    
    // Update state and localStorage
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems); // Persist the changes in localStorage
  };

  return {
    updateCartQuantity,
  };
};

export default CartActionsHandler;
