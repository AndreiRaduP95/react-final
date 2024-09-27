import React from 'react';
import "../../styling/NavBar.css";
import { Link } from 'react-router-dom';


const Navbar = ({
  setLanguage,
  selectedLanguage,
  setCurrency,
  selectedCurrency,
}) => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
      <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt='MyApp Logo' />
      </div>
      <ul className='navbar-links'>
        <li className='nav-item'>
          <Link to='/home'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to='/ProductPage'>Products</Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact'>Contact</Link>
        </li>
        <li className='nav-item'>
          <Link to='/ShoppingCartPage'>Cart</Link>
        </li>
        
      </ul>
      <div className='lang-currency'>
      <div className='language-selector'>
        <select
          id='language'
          value={selectedLanguage}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value='en'>English</option>
          <option value='ro'>Romanian</option>
        </select>
      </div>

      <div className='currency-selector'>
        <select
          id='currency'
          value={selectedCurrency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value='USD'>USD</option>
          <option value='EUR'>EUR</option>
          <option value='GBP'>GBP</option>
        </select>
      </div></div>
    </nav>
    
  );
};

export default Navbar;
