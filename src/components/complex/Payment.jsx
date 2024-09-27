import React, { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardHolderName: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const formErrors = {};
    if (!formData.cardNumber || formData.cardNumber.length !== 16) {
      formErrors.cardNumber = 'Card number must be 16 digits';
    }
    if (
      !formData.expirationDate ||
      !/^\d{2}\/\d{2}$/.test(formData.expirationDate)
    ) {
      formErrors.expirationDate = 'Expiration date must be in MM/YY format';
    }
    if (!formData.cvv || formData.cvv.length !== 3) {
      formErrors.cvv = 'CVV must be 3 digits';
    }
    if (!formData.cardHolderName) {
      formErrors.cardHolderName = 'Cardholder name is required';
    }

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log('Payment Info:', formData);
      alert('Order placed successfully!');
    }
  };

  return (
    <div className='payment-card'>
      <h2>Payment Information</h2>
      <form className='payment-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='cardNumber'>Card Number</label>
          <input
            type='text'
            id='cardNumber'
            name='cardNumber'
            maxLength='16'
            placeholder='Card number'
            value={formData.cardNumber}
            onChange={handleChange}
          />
          {errors.cardNumber && <p className='error'>{errors.cardNumber}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='expirationDate'>Expiration Date (MM/YY)</label>
          <input
            type='text'
            id='expirationDate'
            name='expirationDate'
            maxLength='5'
            placeholder='MM/YY'
            value={formData.expirationDate}
            onChange={handleChange}
          />
          {errors.expirationDate && (
            <p className='error'>{errors.expirationDate}</p>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='cvv'>CVV</label>
          <input
            type='text'
            id='cvv'
            name='cvv'
            maxLength='3'
            placeholder='CVV'
            value={formData.cvv}
            onChange={handleChange}
          />
          {errors.cvv && <p className='error'>{errors.cvv}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='cardHolderName'>Cardholder Name</label>
          <input
            type='text'
            id='cardHolderName'
            name='cardHolderName'
            placeholder='Card holder name'
            value={formData.cardHolderName}
            onChange={handleChange}
          />
          {errors.cardHolderName && (
            <p className='error'>{errors.cardHolderName}</p>
          )}
        </div>
        <div className='cta-button'>
          {' '}
          <button className='cta' type='submit'>
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
