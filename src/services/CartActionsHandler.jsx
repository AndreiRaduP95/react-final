const CartActionsHandler = ({ cartItems, setCartItems }) => {

  // Helper function to update localStorage after modifying the cart
const updateLocalStorage = (updatedCartItems) => {
  localStorage.setItem('cart', JSON.stringify(updatedCartItems));
};


  // Remove product from cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);

   // Update state and localStorage
   setCartItems(updatedCartItems);
   updateLocalStorage(updatedCartItems);
 };
 // Update product quantity in cart
 const updateCartQuantity = (productId, quantity) => {
  const updatedCartItems = cartItems.map((item) =>
    item.id === productId
      ? { ...item, quantity: Math.max(quantity, 1) }
      : item
  );
    // Update state and localStorage
    setCartItems(updatedCartItems);
    updateLocalStorage(updatedCartItems);
  };

  return {
    removeFromCart,
    updateCartQuantity,
  };
};

export default CartActionsHandler;
