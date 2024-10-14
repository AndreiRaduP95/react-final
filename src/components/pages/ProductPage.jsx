import '../../styling/Card.css';
import '../../styling/NavBar.css';
import Navbar from '../complex/NavBar';
import ProductFetcher from '../../services/ProductFetcher';
import { useState , useEffect} from 'react';
import Card from '../complex/Card';
import { getCurrencyRates, convertPrice } from '../../services/Currency';




const Cards = () =>{
    const [selectedLanguage, setLanguage] = useState('en');
    const [selectedCurrency, setCurrency] = useState('USD');
    const [products, setProducts] = useState([]);
    const [currencyRates, setCurrencyRates] = useState({});
    // Fetch currency rates
  useEffect(() => {
    const fetchRates = async () => {
      const rates = await getCurrencyRates();
      if (rates) {
        setCurrencyRates(rates); // Store currency rates
      }
    };
    
    fetchRates();
  }, []);

  // Convert product prices based on selected currency
  const convertProductPrice = (priceInEUR) => {
    if (currencyRates[selectedCurrency]) {
      return convertPrice(priceInEUR, selectedCurrency, currencyRates);
    }
    return priceInEUR; // Default to EUR if no rate available
  };

  
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
          const convertedPrice = convertProductPrice(values.price);
          return (
            <Card
              key={values.id}
              id={values.id}
              product_name={values.name}
              // price={values.price}
              price={convertedPrice}
              content={values.description}
              imageUrl='/assets/prd1.jpg'
              buttonText='Add to cart '
              selectedCurrency={selectedCurrency} // Pass selected currency to card
            />
          );
        })}
      </div>
      </div>
    )}

export default Cards