import '../../styling/Card.css';
import '../../styling/NavBar.css';
import Navbar from '../complex/NavBar';
import ProductFetcher from '../../services/ProductFetcher';
import { useState } from 'react';
import Card from '../complex/Card';



const Cards = () =>{
    const [selectedLanguage, setLanguage] = useState('en');
    const [selectedCurrency, setCurrency] = useState('USD');
    const [products, setProducts] = useState([]);
    return (
      <div className='App'>
      <Navbar selectedLanguage={selectedLanguage}
        setLanguage={setLanguage}
        selectedCurrency={selectedCurrency}
        setCurrency={setCurrency}/>
      <div className='title'>
        <h1>Exclusive deals only today</h1>
      </div>
      <ProductFetcher setProducts={setProducts} /> {/* Fetch products here */}
      <div className='cards-container'>
        {products.map((values) => {
          return (
            <Card
              key={values.id}
              id={values.id}
              product_name={values.name}
              price={values.price}
              content={values.description}
              imageUrl='/assets/prd1.jpg'
              buttonText='Add to cart '
            />
          );
        })}
      </div>
      </div>
    )}

export default Cards