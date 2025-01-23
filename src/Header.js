import './Header.css';
import React, { useState } from 'react';
import logo from './images/logo.png'; // Import the logo image

const Header =() =>{
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  };

  return(
    <header className='header'>
      <div className='logo'>
      <a href="#home">
      <img src={logo} alt="Katha Logo" className="logo-img" /> {/* Add the logo image */}
      </a></div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#shop'>Shop</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};
export default Header;
