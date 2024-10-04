import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [conversionRates, setConversionRates] = useState({});
  const [prices, setPrices] = useState({});

  // Fetch conversion rates from Fixer.io API
  useEffect(() => {
    const fetchConversionRates = async () => {
      try {
        const response = await axios.get('http://data.fixer.io/api/latest', {
          params: {
            access_key: 'bb540433bf623720dfb8ba40dd366e0b',
          },
        });
        setConversionRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching conversion rates:', error);
      }
    };
    fetchConversionRates();
  }, []);

  // Function to convert price based on selected currency
  const convertPrice = (priceInUSD) => {
    if (selectedCurrency === 'USD' || !conversionRates[selectedCurrency]) {
      return priceInUSD;
    }
    return (priceInUSD * conversionRates[selectedCurrency] / conversionRates['USD']).toFixed(2);
  };

  // Update prices globally when currency changes
  const updatePrices = (products) => {
    const updatedPrices = {};
    products.forEach((product) => {
      updatedPrices[product.id] = convertPrice(product.price);
    });
    setPrices(updatedPrices);
  };

  return (
    <CurrencyContext.Provider
      value={{ selectedCurrency, setSelectedCurrency, updatePrices, prices }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
