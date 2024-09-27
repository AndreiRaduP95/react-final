import React  from 'react';

const Cards = ({
  id,
  product_name,
  price,
  content,
  imageUrl,
  buttonText,
}) => {
  const AddToCart = () => {
    if(localStorage.getItem('cart-products')){
      let cartProductsJson = localStorage.getItem('cart-products')
      let cartProducts = JSON.parse(cartProductsJson);
      if(cartProducts.some(product => product.id === id)){
        let currentProduct = cartProducts.find(product => product.id === id)
        currentProduct.quantity += 1
      }else{
        cartProducts.push({id,product_name,content,price,quantity:1})
      }
     localStorage.setItem('cart-products',JSON.stringify(cartProducts))
    }else{
      let cartProducts = [{id,product_name,content,price,quantity:1}];
      localStorage.setItem('cart-products',JSON.stringify(cartProducts))
 
    }
  }
  return (
    <div className='card'>
      {imageUrl && (
        <img src={imageUrl} alt={product_name} className='card-image' />
      )}
      <div className='card-body'>
        <h2 className='product_name'>{product_name}</h2>
        <p className='price'>{price} USD</p>
        <p className='card-content'>{content}</p>
        {buttonText && (
          <button onClick={AddToCart} className='card-button'>
            {'Add to cart'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Cards;
