import React, { useState } from 'react';
import Form from '../complex/Form';
import PaymentForm from '../complex/Payment';

const Checkout = () => {
  const [billingData, setBillingData] = useState({
    fullName: '',
    email: '',
    country: '',
    address: '',
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cvv: '',
    expiryDate: '',
  });

  const [errors, setErrors] = useState({
    billingErrors: {},
    paymentErrors: {},
  });

  // Handle billing info change
  const handleBillingChange = (data) => {
    setBillingData(data);
  };

  // Handle payment info change
  const handlePaymentChange = (data) => {
    setPaymentData(data);
  };

  // Validate both billing and payment data
  const validate = () => {
    const billingErrors = {};
    const paymentErrors = {};

    // Validate billing info
    if (!billingData.fullName) billingErrors.fullName = 'Full name is required';
    if (!billingData.email) billingErrors.email = 'Email is required';
    if (!billingData.country) billingErrors.country = 'Country is required';
    if (!billingData.address) billingErrors.address = 'Address is required';

    // Validate payment info
    if (!paymentData.cardNumber) paymentErrors.cardNumber = 'Card number is required';
    if (!paymentData.cvv) paymentErrors.cvv = 'CVV is required';
    if (!paymentData.expiryDate) paymentErrors.expiryDate = 'Expiry date is required';

    setErrors({ billingErrors, paymentErrors });

    // Return true if both billing and payment forms are valid
    return (
      Object.keys(billingErrors).length === 0 && Object.keys(paymentErrors).length === 0
    );
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // Submit the form
      console.log('Form submitted successfully:', { billingData, paymentData });
      alert('Order placed successfully!');
    } else {
      console.log('Validation failed. Please check the input fields.');
    }
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {/* Billing Form */}
        <Form data={billingData} onChange={handleBillingChange} errors={errors.billingErrors} />
        
        {/* Payment Form */}
        <PaymentForm data={paymentData} onChange={handlePaymentChange} errors={errors.paymentErrors} />

        {/* Submit Button */}
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
