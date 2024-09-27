import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    address: '',
  });

  const [errors, setErrors] = useState({});

  // Country options
  const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany'];

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

    // Validate form fields
    const formErrors = {};
    if (!formData.fullName) formErrors.fullName = 'Full name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.country) formErrors.country = 'Country is required';
    if (!formData.address) formErrors.address = 'Address is required';

    setErrors(formErrors);

    // If no errors, submit the form
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Data:', formData);
      alert('Form submitted successfully');
    }
  };

  return (
    <div className='form-card'>
      <h2>Billing information</h2>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='fullName'>Full Name</label>
          <input
            type='text'
            id='fullName'
            name='fullName'
            placeholder='Full name'
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className='error'>{errors.fullName}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email Address'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='country'>Country</label>
          <select
            id='country'
            name='country'
            value={formData.country}
            onChange={handleChange}
          >
            <option value=''>Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className='error'>{errors.country}</p>}
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            name='address'
            placeholder='Address'
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className='error'>{errors.address}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
