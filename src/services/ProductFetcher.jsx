import { useEffect } from 'react';

const ProductFetcher = ({ setProducts }) => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'http://private-32dcc-products72.apiary-mock.com/product'
      );
      const jsonData = await response.json();
      //Sort the products by price
      const sortedProducts = jsonData.sort((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    };
    fetchData();
  }, [setProducts]);
};

export default ProductFetcher;
