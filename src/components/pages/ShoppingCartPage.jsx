import Navbar from '../complex/NavBar';
import Cart from '../complex/cart';
import Form from '../complex/Form';
import PaymentForm from '../complex/Payment';
import CartActionsHandler from '../../services/CartActionsHandler';
import { useState,useEffect} from 'react';
import '../../styling/NavBar.css';
import '../../styling/ShoppingCartPage.css';
import { getCurrencyRates, convertPrice } from '../../services/Currency';



const ShoppingCart = () =>{
  const [selectedLanguage, setLanguage] = useState('en');
  const [selectedCurrency, setCurrency] = useState('USD');
  const [cartItems, setCartItems] = useState([]); // Cart state
  const [currencyRates, setCurrencyRates] = useState({}); 
  
  // Use CartActionsHandler for cart operations
  const cartActions = CartActionsHandler({ cartItems, setCartItems });
  // Load cart items from localStorage when the component mounts
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart-products')) || [];
    setCartItems(storedCartItems); // Initialize cartItems from localStorage
  }, []);
 // Fetch currency rates on mount
 const fetchRates = async () => {
  const rates = await getCurrencyRates();  // Fetch currency rates from Fixer.io API
  if (rates) {
    setCurrencyRates(rates);  // Set currency rates in state
  }
};

fetchRates();
// Function to convert item prices based on selected currency
const convertCartItemPrice = (priceInEUR) => {
  if (currencyRates[selectedCurrency]) {
    return convertPrice(priceInEUR, selectedCurrency, currencyRates);  // Convert price using the selected currency
  }
  return priceInEUR;  // Default to EUR if no rates are available
};

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
          cartItems={cartItems.map(item => ({
            ...item,
            price: convertCartItemPrice(item.price),  // Convert price for each item
          }))}
          selectedCurrency={selectedCurrency}  // Pass selected currency for display
          currencyRates={currencyRates}  
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