import Navbar from '../complex/NavBar';
import Cart from '../complex/cart';
import Form from '../complex/Form';
import PaymentForm from '../complex/Payment';
import CartActionsHandler from '../../services/CartActionsHandler';
import { useState,useEffect} from 'react';
import '../../styling/NavBar.css';
import '../../styling/ShoppingCartPage.css';



const ShoppingCart = () =>{
  const [selectedLanguage, setLanguage] = useState('en');
  const [selectedCurrency, setCurrency] = useState('USD');
  const [cartItems, setCartItems] = useState([]); // Cart state
  // Use CartActionsHandler for cart operations
  const cartActions = CartActionsHandler({ cartItems, setCartItems });
  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart-products')) || [];
    setCartItems(storedCartItems); // Initialize cartItems from localStorage
  }, []);


    return (    
<div className='shopping-cart'>
  <div>
<Navbar selectedLanguage={selectedLanguage}
        setLanguage={setLanguage}
        selectedCurrency={selectedCurrency}
        setCurrency={setCurrency}/></div>
        <h1 className='secure-checkout'>Secure Checkout</h1>
<div className='cart-components'>
        {/* Cart component placed below cards */}
        <Cart
          cartItems={cartItems} 
          onRemove={cartActions.removeFromCart}
          onUpdateQuantity={cartActions.updateCartQuantity}
        />
        <Form /> 
        <PaymentForm />
        
        </div>
      </div>
    
    )

}

export default ShoppingCart