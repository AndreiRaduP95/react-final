// import React, { useState } from 'react';
// import Card from './components/complex/Card';
// import Cart from './components/complex/cart'; // Import Cart component
// import Form from './components/complex/Form';
// import PaymentForm from './components/complex/Payment';
// import Navbar from './components/complex/NavBar';
// import './styling/App.css'; // Import CSS for full screen
// import './styling/Cart.css';
// import './styling/Form.css';
// import './styling/Payment.css';
// import './styling/Card.css';
// import './styling/NavBar.css';
// import ProductFetcher from './services/ProductFetcher';
// import CartActionsHandler from './services/CartActionsHandler';



// function App() {
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]); // Cart state
//   const [selectedLanguage, setLanguage] = useState('en');
//   const [selectedCurrency, setCurrency] = useState('USD');

//   // Use CartActionsHandler for cart operations
//   const cartActions = CartActionsHandler({ cartItems, setCartItems });

//   return (
//     <div className='App'>
//       <Navbar selectedLanguage={selectedLanguage}
//         setLanguage={setLanguage}
//         selectedCurrency={selectedCurrency}
//         setCurrency={setCurrency}/>
//       <div className='title'>
//         <h1>Exclusive deals only today</h1>
//       </div>
//       <ProductFetcher setProducts={setProducts} /> {/* Fetch products here */}
//       <div className='cards-container'>
//         {products.map((values) => {
//           return (
//             <Card
//               key={values.id}
//               product_name={values.name}
//               price={values.price}
//               content={values.description}
//               imageUrl='/assets/prd1.jpg'
//               buttonText='Add to cart '
//               addToCart={() => cartActions.addToCart(values)}
//             />
//           );
//         })}
//       </div>
//       <div className='shopping-cart'>
//         {/* Cart component placed below cards */}
//         <Cart
//           cartItems={cartItems}
//           onRemove={cartActions.removeFromCart}
//           onUpdateQuantity={cartActions.updateCartQuantity}
//         />
//         <Form /> <PaymentForm />
//       </div>
//     </div>
//   );
  
// }

// export default App;
