import axios from 'axios';

const FIXER_API_KEY = 'bb540433bf623720dfb8ba40dd366e0b';
const BASE_URL = `https://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

export const getCurrencyRates = async () => {
  try {
    // Fetch rates from EUR base currency
    const response = await axios.get(BASE_URL);

    if (response.data && response.data.success) {
      return response.data.rates; // Return the exchange rates
    } else {
      console.error('Error fetching currency rates', response.data);
      return null;
    }
  } catch (error) {
    console.error('API error:', error);
    return null;
  }
};

// Function to convert price from EUR to the selected currency
export const convertPrice = (priceInEUR, targetCurrency, rates) => {
  const rate = rates[targetCurrency];
  if (rate) {
    return priceInEUR * rate; // Convert price from EUR to the target currency
  } else {
    console.error(`Rate for ${targetCurrency} not found`);
    return priceInEUR; // Return price in EUR if conversion fails
  }
};
