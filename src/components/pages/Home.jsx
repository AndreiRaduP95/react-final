import React from 'react';
import Navbar from '../complex/NavBar';
import '../../styling/NavBar.css';
import '../../styling/Home.css';
import { useState } from 'react';


const Home = () => {
  const [selectedLanguage, setLanguage] = useState('en');
  const [selectedCurrency, setCurrency] = useState('USD');
  return (

    <div className='home-page'>
      
      <Navbar selectedLanguage={selectedLanguage}
        setLanguage={setLanguage}
        selectedCurrency={selectedCurrency}
        setCurrency={setCurrency}/>

      <div className='home-container'>
      <section className='company-info'>
        <h2>About Us</h2>
        <p>
          Shopware is a leading provider of cutting-edge technology solutions, 
          offering scalable services for businesses of all sizes. We are committed to 
          bringing you innovative products that transform the way you operate.
        </p>
      </section>

      <section className='mission'>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower businesses to leverage technology for growth and 
          efficiency. We aim to provide the best-in-class tools and platforms that enable 
          companies to achieve more.
        </p>
      </section>

      <section className='values'>
        <h2>Our Core Values</h2>
        <ul>
          <li>Innovation: We are constantly looking for new and better ways to serve our customers.</li>
          <li>Integrity: We believe in transparency, trust, and respect in everything we do.</li>
          <li>Customer Focus: We put our customers at the heart of our decision-making process.</li>
          <li>Collaboration: We believe that teamwork and partnerships drive success.</li>
        </ul>
      </section>
      </div> 
    </div>
  );
};

export default Home;
