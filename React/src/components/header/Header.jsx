import "./Header.css"; // Import the CSS file for styling
import React from "react";

const Header = () => {
   return (
      <header className="app-header">
         <div className="header-container">
            <div className="logo">
               {/* Circular Logo */}
               <img
                  src="/icon.jpg" // Reference to icon.jpg in the public folder
                  alt="Logo"
                  className="logo-img"
               />
               <h2 className="logo-text">Handwritten Digit Recognition</h2>
            </div>

            <nav className="nav-links">
               <a href="#bout" className="nav-item">
                  About
               </a>
               <a href="#products" className="nav-item">
                  Products
               </a>
               <a href="#features" className="nav-item">
                  Features
               </a>
               <a href="#pricing" className="nav-item">
                  Pricing
               </a>
            </nav>
         </div>
      </header>
   );
};

export default Header;
