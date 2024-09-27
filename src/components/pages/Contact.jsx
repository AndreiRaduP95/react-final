import React from 'react';
import Navbar from '../complex/NavBar';
import '../../styling/Contact.css';
import '../../styling/NavBar.css';
import { useState } from 'react';

const Contact = () => {
  const [selectedLanguage, setLanguage] = useState('en');
  const [selectedCurrency, setCurrency] = useState('USD');
  return (
    <div className="contact-page">
         <Navbar selectedLanguage={selectedLanguage}
        setLanguage={setLanguage}
        selectedCurrency={selectedCurrency}
        setCurrency={setCurrency}/>
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <p>We'd love to hear from you! Feel free to reach out to us using the contact details below:</p>
        
        <h2>Our Contact Information</h2>
        <p><strong>Email:</strong> info@TestCompany.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 1234 Main St, City, Country</p>
        
        <h2>Business Hours</h2>
        <p><strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM</p>
        <p><strong>Saturday - Sunday:</strong> Closed</p>

        <h2>Social Media</h2>
        <p>Follow us on social media for updates and more!</p>
        <a href='https://www.facebook.com/'><strong>Facebook:</strong> facebook.com/TestCompany</a>
        <a href='https://x.com/login'><strong>Twitter:</strong> twitter.com/TestCompany</a>
      </div>
    </div>
  );
};

export default Contact;
